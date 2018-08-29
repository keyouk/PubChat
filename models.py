import sqlite3 as sql



def get_dict(sql):
    dict(c.execute(sql,()).fetchall())


def insertUser(username,password):
    connection = sql.connect("main.db")
    cursor = connection.cursor()
    cursor.execute("INSERT INTO USERS (username,password) VALUES (?,?)", (username,password))
    connection.commit()
    connection.close()


def retrieveUsers(user):
	connection = sql.connect("main.db")
	cursor = connection.cursor()
	cursor.execute("SELECT username FROM users") 
	users = cursor.fetchall()
	connection.close()
	
	return users


def retrievePassword(user):
	connection = sql.connect("main.db")
	cursor = connection.cursor()
	cursor.execute("SELECT password FROM users WHERE username= '%s'" % (user)) 
	users = cursor.fetchone()
	connection.close()
	
	return users[0]

