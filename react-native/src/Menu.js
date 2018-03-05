import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Friends from './Friends';
import Groups from './Groups';
import Insertbill from './Insertbill';
import Splitbill from './Splitbill';
import Settings from './Settings';

 export const MyTab = TabNavigator({
	
	
	Groups: { screen: Groups },
	Insertbill: { screen: Insertbill },
	Splitbill: { screen: Splitbill },
	Settings: { screen: Settings },
	

},
{
	tabBarPosition: 'bottom',
	tabBarOptions: {
		activeTintColor: 'white',
		inactiveTintColor: 'black',
		showIcon: true,

		labelStyle: {
			fontSize: 10,
			padding: 2,
		},

		style: {
			backgroundColor: '#9E9E9E'
		}
	}

	});

class Menu extends Component {


	render()
	{
		return (
			<MyTab />


		);

	}
}

export default Menu;
