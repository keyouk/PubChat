import React from "react";
import Header from './header';
import Chat from './chat';
import OnlineList from './online_list'


export default class App extends React.Component {
  render () {
    return (
    	<div id="parent">
			<Header />
			<div>
				<OnlineList />
				<Chat />
			</div>	
    	</div>
    );
  }
}

