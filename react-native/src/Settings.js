import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage } from 'react-native';
import { SearchBar, Button, Icon, Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class Settings extends Component {

	

	static navigationOptions = {
		tabBarLabel: 'Settings',
		tabBarIcon: ({ tintColor }) => {
			return (
				<Icon
			name='wrench'
			type='font-awesome'
			color={tintColor}
			/>
			);
		}	
			

	}

state= {groupid: '', username: '', auth_token: ''}


onButtonPress() {

	fetch('https://auth.detoxification67.hasura-app.io/v1/user/logout',{

		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			"Authorization": "Bearer " + this.state.auth_token,
		}


	})
	.then(Actions.auth);


}


componentDidMount() {

		this.SaveData();
}	


SaveData = async () => {

var value1 = await AsyncStorage.getItem('username');
		
		this.setState({ username: value1 });	

var value2 = await AsyncStorage.getItem('auth_token');

 this.setState({ auth_token: value2 });


}





render() {


	return(
		<View>
		<Header 
			 centerComponent={{ text: 'Settings', style: { color: '#fff', letterSpacing: 3 } }}
			backgroundColor='#9E9E9E' />

		<View style={{ backgroundColor: 'lightgrey' }} >

		<View style={{flexDirection: 'row'}} >

		<Icon name='user'
			type='font-awesome'
			color='darkgrey'
			size={30}
			iconStyle={{ alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 7 ,marginRight: 105 }} />


		<View style ={{flexDirection: 'column',alignItems: 'center', justifyContent: 'center'}}>
		<Text style={{ fontSize: 16 }}> Logged In As:</Text>
		<Text style={{ fontSize: 21, fontWeight: 'bold' }}>{this.state.username} </Text>


															
		</View>
		</View>
		</View>



		

		<View style={{ marginTop: 50, alignItems: 'center', justifyContent: 'center' }}>
		<Button
		buttonStyle={{ height: 35, width: 240, margin: 5 }}
			title='log out '
			onPress={ this.onButtonPress.bind(this) }
			outline
			color= 'black' />
		</View>	 

		</View>

			);


}


}

export default Settings;
