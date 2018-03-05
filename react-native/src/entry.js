import { Button } from 'react-native-elements';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class entry extends Component {

	render()
	
	{
		return (
			<View style={styles.viewstyle}>
			<Text style={{fontWeight: 'bold', margin: 8, letterSpacing: 5}}> S  P  L  I  T  W  I  S  E </Text>
			<Button
			buttonStyle={{height: 35, width: 240}}
			title='Login '
			onPress={() => Actions.Login()} />
			<Button 
			buttonStyle={{height: 35, width: 240, margin: 8}}
			title='sign up'
			onPress={() => Actions.Signup()} />
			</View>

			);

	}
}

const styles = {
	viewstyle: {

		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 240
	}
};

export default entry;
