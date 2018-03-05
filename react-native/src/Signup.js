import React, { Component } from 'react';
import { SearchBar, Button } from 'react-native-elements';
import { View, Text, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Signup extends Component {

state= { username: '', password: '', error: '', phoneno: '' };


	onButtonPress() {

		this.setState({ error: '' });

			fetch('https://auth.detoxification67.hasura-app.io/v1/signup',
			{
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					"provider": "username",
					"data" : {
						"username": this.state.username,
						"password": this.state.password
					}
				})
			})
			.then((response) => response.json())
			.then((res) => {
           
           if ((res.auth_token) &&(res.hasura_id))
           {
   				AsyncStorage.setItem('auth_token',res.auth_token);
   				AsyncStorage.setItem('hasura_id',res.hasura_id.toString());
   				AsyncStorage.setItem('username',res.username);

   				 fetch('https://api.detoxification67.hasura-app.io/insertinfo',
   				{
   				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					"Authorization": "Bearer " + res.auth_token,
				},

				body: JSON.stringify({
					"hasura_id": parseInt(res.hasura_id),
					"username": res.username,
					"email": "abc@xyz.com",
					"phone": this.state.phoneno


				})



   				}); 


           		
           		Actions.main();
           		
           		// and when user logout, clear the data from async storage.
           		//also the group id should eb st
           		//check the value as follows. in other pages.

           		

           }
           else
           {
           		//this.onLoginFailure.bind(this);
           		this.setState({ error: 'User Already Exists' });

           }

         
       });

		}

		

	render() {


		return (
			<View style={styles.viewstyle}>
		 <Text style={{ fontWeight: 'bold', margin: 8, letterSpacing: 5 }}> S  P  L  I  T  W  I  S  E </Text>
			<SearchBar
			icon={{ type: 'font-awesome', name: 'envelope' }}
			placeholder='Username' 
			containerStyle={{ height: 50, width:240, margin: 2 }} 
			value={this.state.username}
			onChangeText={text => this.setState({ username: text })} />

			<SearchBar
			icon={{ type: 'font-awesome', name: 'lock' }}
			placeholder='Your password'
			containerStyle={{ height: 50, width:240, margin: 2 }} 
			secureTextEntry 
			value={this.state.password}
			onChangeText={text => this.setState({ password: text })}/>

			<SearchBar
			icon={{ type: 'font-awesome', name: 'phone' }}
			placeholder='Enter phone no'
			containerStyle={{ height: 50, width:240, margin: 2 }} 
			keyboardType='numeric'
			value={this.state.phoneno}
			onChangeText={text => this.setState({ phoneno: text })}/>

			<Text style={{ margin: 2, color: 'red' }}>{this.state.error}</Text>

			<Button
			buttonStyle={{height: 35, width: 240, margin: 5 }}
			title='Sign up ' 
			onPress={this.onButtonPress.bind(this)} />

			</View>

			);

	}

}

const styles = {

	viewstyle: {

		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 170
	}

};

export default Signup;
