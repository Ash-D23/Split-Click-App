import React, { Component } from 'react';
import { SearchBar, Button } from 'react-native-elements';
import { View, Text, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Login extends Component {

	state= { username: '', password: '', error:'' };

	onButtonPress() {

		this.setState({ error: '' });

			fetch('https://auth.detoxification67.hasura-app.io/v1/login',
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
           		//this.onLoginSuccess.bind(this);
           		//alert(res.auth_token);
//let us see what we are saving first. can you run the code now.
           		AsyncStorage.setItem('auth_token',res.auth_token);
   				AsyncStorage.setItem('hasura_id',res.hasura_id.toString());
   				AsyncStorage.setItem('username',res.username);
           		Actions.main();
           }
           else
           {
           		//this.onLoginFailure.bind(this);
           		this.setState({ error: 'Invalid Username/Password' });
           		

           }

         
       });// run this code and see i
			//.then(this.ValidateInfo.bind(this))     
			//.catch(this.onLoginFailure.bind(this));

		}

//Can you do it from this point forward?
//something like this.
// i am backshow me your postman outpu

//yes its working. so the auth token is in json right ? we will have to convert to string usiing JSON.parse()?




onLoginSuccess() {
	
			Actions.main();
		}
onLoginFailure() {
	this.setState({ error: 'Incorrect Details' });
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
			onChangeText={text => this.setState({ password: text })} />

			<Text style={{ margin: 2, color: 'red' }}>{this.state.error}</Text>

			<Button
			buttonStyle={{ height: 35, width: 240, margin: 5 }}
			title='Login ' 
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

export default Login;
