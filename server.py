from flask import Flask
from flask import render_template, redirect, request, url_for
import flask_login
import models as dbHandler
import json


app = Flask(__name__, static_folder="./static/dist", template_folder="./static")
login_manager = flask_login.LoginManager()
login_manager.init_app(app)


class User(flask_login.UserMixin):
    pass


@login_manager.user_loader
def user_loader(username):
    users = dbHandler.retrieveUsers(username)
    if username != users:
        return None

    user = User()
    user.id = username

    return user


@login_manager.request_loader
def request_loader(request):
    username = request.form.get('username')
    users = dbHandler.retrieveUsers(username)
    if username != users:
        return None

    user = User()
    user.id = username

    return user


@app.route('/')
def home():
	# if flask_login.current_user.is_authenticated:
	# 	return render_template("index.html", user=flask_login.current_user.get_id())
	# else:
	# 	return redirect(url_for("login"))
    return render_template("index.html", user=flask_login.current_user.get_id())



@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        if flask_login.current_user.is_authenticated:
            return render_template("index.html", user=flask_login.current_user.get_id())
        else:
            return render_template("login.html")

    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user_password = dbHandler.retrievePassword(username)  

        if password == user_password:
            return render_template('index.html', user=username)

        else:
            return "Login Failed"

    return render_template('index.html')





if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
