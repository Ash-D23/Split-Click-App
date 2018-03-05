import React, { Component } from 'react';
import { Header, Icon } from 'react-native-elements';
import { View, Text } from 'react-native';


class Friends extends Component {

	static navigationOptions = {
		tabBarLabel: 'Friends',
		tabBarIcon: ({ tintColor }) => {
			return (
				<Icon
			name='user'
			type='font-awesome'
			color={tintColor}
			/>
			);
		}	
			

	}


	render()
	{
		return (
			<Header 
			 centerComponent={{ text: 'FRIENDS', style: { color: '#fff', letterSpacing: 3 } }}
			backgroundColor='#9E9E9E' />


		);

	}
}

export default Friends;
