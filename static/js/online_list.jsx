import React from 'react';


var box = {
	width: '14em',
	backgroundColor:'rgb(43, 40, 40)',
	boxShadow:'-1px 1px 1px black',
	color: '#fff',
	padding: '20px',
	display: 'inline-block',
	float: 'left',
	overflow: 'hidden'
};


var boxSection = {
	height: '40%',
	overflow: 'auto'
}

var title ={
	color: "white",
	display: 'block',
	textDecoration: "none",
	margin: '15px'
}

var text = {
	width: '80%',
	listStyleType: "none",
	display: "block",
    color: "#d2cccc",
    textAlign: "left",
    padding: "6px",
    textDecoration: "none",
    fontSize: "14px",
    position:'relative',
    marginLeft: '20px'
}

	
const channels = ['General', 'Engineering', 'Platform-Core', 'Ops', 'QA Team', 'Support Team', 'Marketing', 'Interns', 'Board Games', 'Gaming', 'Product'];
const listItems = channels.map((channel) => <div style={text}> #  {channel}</div>);

const users = ['Kelvin Youk', 'Jordan Santiago', 'Cynthia Tsai', 'Wesley Chun', 'Chuan Ji', 'Mike Sorvillo', 'Andy Fulch', 'Grant Timmerman', 'Yizhou Ye', 'Pengcheng Sun', 'Senthil Kumar'];
const listUsers = users.map((user) => <li style={text} >{user}</li>);


export default class OnlineList extends React.Component {
  render () {
    return (

    	<div style={box}>
    		<a style={title}>Channels</a>
    		<div style = {boxSection} >
				{listItems}
			</div>
			<a style={title}>Direct Messages</a>
			<div style = {boxSection}>
				{listUsers}
			</div>
    	</div>
    );
  }
}