import React, { Component } from 'react';
import { Header, Icon, Button, ButtonGroup } from 'react-native-elements';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


class Groups extends Component {

	static navigationOptions = {
		tabBarLabel: 'Groups',

		tabBarIcon: ({ tintColor }) => {
			return (
				<Icon
			name='users'
			type='font-awesome'
			color={tintColor}
			/>
			);
		}	
	}

	render()
	{	
		const buttons = [{ element: () => <Text>you owe</Text>}, { element: () => <Text>you are owed</Text> }, { element: () => <Text> total </Text> }];
		return (

		<View>
			<Header 
			 centerComponent={{ text: 'GROUPS', style: { color: '#fff', letterSpacing: 3 } }}
			backgroundColor='#9E9E9E' />

			<View style={{flex: 1}}>

			<ButtonGroup
      buttons={buttons}
      containerStyle={{ height: 40}} />

      		</View>


			<View style={styles.viewstyle}>
			<Button
			title='start a new group'
			onPress={Actions.Addgroup}
			rounded
			backgroundColor='grey' />

			</View>

        </View>

		);

	}
}

const styles = {

	viewstyle: {

		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 100

	},

	buttonstyles: {

		flexDirection: 'row',
		flex: 1
		
	}


};

export default Groups;
