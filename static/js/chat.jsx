import React from 'react';
import ChatEngineCore from 'chat-engine'


var box = {
	width: '100%',
	height: '100%',
	paddingTop:'10px',
	margin: '0px 4em 0px 0px',
	backgroundColor:'white',
	boxShadow:'0 0 2px 1px #0000005c',
	display: 'inline-block'
};

var chatHistory = {
	padding: '30px',
	display: 'inline-block'
};

export default class Chat extends React.Component {
	render() {
		return(
			<div style = {chatHistory}>
				<b>Hello World</b>
			</div>
		)
	}
}




