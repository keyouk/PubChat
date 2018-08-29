import React from "react";


var box = {
	width: '100%',
	height: '60px',
	paddingTop:'10px',
	backgroundColor:'white',
	position: 'relative',
	boxShadow:'1px 1px black'
};


var title = {
	textAlign: 'left',
	paddingLeft: '60px'
}


var pubTitle = {
	textAlign: 'center',
	color: '#d02129',
	display: 'inline'
};


var chatTitle = {
	textAlign: 'left',
	color: '#313131',
	display: 'inline'
}




export default class Header extends React.Component {
  render () {
    return (
    	<div style={box}>
			<div style={title}>
				<h2 style={pubTitle}>Pub</h2>
				<h2 style={chatTitle}>Chat</h2>
			</div>
		</div>
    	);
  }
}