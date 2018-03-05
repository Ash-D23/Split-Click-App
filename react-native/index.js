import { AppRegistry, View } from 'react-native';
import React, { Component } from 'react';
import Router from './src/Router';

class App extends Component {

	render() {
	return (
			
			<Router />

		);

		}

}


AppRegistry.registerComponent('splitwise', () => App);

