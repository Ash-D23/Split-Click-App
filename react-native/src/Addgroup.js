import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage } from 'react-native';
import { SearchBar, Button, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';



class Addgroup extends Component 
{
	state={ groupname: '', groupid: '', hasuraid: '', username: '', auth_token: '' };

	onButtonPress()
	{
		//alert(this.state.auth_token);
		//now use it in this function, and see that is the value.
		fetch('https://api.detoxification67.hasura-app.io/insertgroup',
		{
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					"Authorization": "Bearer " + this.state.auth_token,
				},

				body: JSON.stringify({
					"groupname": this.state.groupname
				})

			})
			 .then((response) => response.json())
			 .then((res) => {

			 	//this.setState({ groupid: res.returning[0].group_id});
			 	AsyncStorage.setItem('groupname', this.state.groupname);
			 	AsyncStorage.setItem('group_id', res.returning[0].group_id.toString());
			 	//this.SaveGroup().done();


			 	//alert(this.state.hasuraid);

			 	fetch('https://api.detoxification67.hasura-app.io/addmembers',
			 			{

			 				method: 'POST',
							headers: {
								'Content-type': 'application/json',
								"Authorization": "Bearer " + this.state.auth_token,
							},

							body: JSON.stringify({

								"hasura_id": this.state.hasuraid,
								"username": this.state.username,
								"groupid":  res.returning[0].group_id
							})

			 			}

			 				)

			 		Actions.Addmembers();

			 });
			
			 

	}

	SaveGroup = async () => {

		var value4 = await AsyncStorage.getItem('group_id');
		this.setState({ groupid: parseInt(value4) });

		
	}

	SaveData = async () => {
		var value = await AsyncStorage.getItem('auth_token');
		//alert(value);
		this.setState({ auth_token: value });

		var value2 = await AsyncStorage.getItem('hasura_id');
		this.setState({ hasuraid: parseInt(value2) });

		var value3= await AsyncStorage.getItem('username');
		this.setState({ username: value3 });


		//alert(this.state.auth_token);
		//
		//now try again.
		//alert(auth_token);
		//lets run this now
		//shouldnt that be this.state.auth_token?
		//now try again.

		//let us first try this, then we will try with this.....
		//now try again.


	}
	//now run this code

	componentDidMount()
	{	// var value = await AsyncStorage.getItem('auth_token');
       //if (value !== null) 
       //i can use this here right? in place of <auth_token> i shoud write value?
       //since i havent implemented log out till now, so it will be fine if i dont use the auth token ?
       this.SaveData().done();

	}

	render()
	{

		return (

			<View style={{ marginTop: 80 }}>
			<View style={{ flexDirection: 'row'}}>
			
			<Icon name='users'
			type='font-awesome'
			color='darkgrey'
			size={50}
			iconStyle={{ alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 20, marginRight: 55}} />


			<Text style={{ justifyContent: 'center', alignItems: 'center' }}> Enter a group name </Text>

			</View>

			<TextInput
			value={this.state.groupname}
			onChangeText={text => this.setState({ groupname: text })}
			placeholder="Group name"
			style={{ borderColor: 'white', height: 60, width: 240, alignItems: 'center', justifyContent: 'center',
			marginLeft: 135, fontSize: 18, fontWeight: 'bold' }}
			/>
			<Button
			title='Confirm'
			containerViewStyle={{ alignItems: 'center', justifyContent: 'center' }}
			onPress={ this.onButtonPress.bind(this)} />
			</View>

			);
	}

}

export default Addgroup;
