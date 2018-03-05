import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage } from 'react-native';
import { SearchBar, Button, Icon } from 'react-native-elements';


class Addmembers extends Component {

	state={ phoneno: '', groupid: '', auth_token: ''};

	onButtonPress() {

		//alert(this.state.phoneno);

		fetch('https://api.detoxification67.hasura-app.io/userinfo/'+this.state.phoneno,
		{

			method: 'GET',
			headers: {
					'Content-type': 'application/json',
				},

		})
		.then((response) => response.json())
		.then((res) => {

			//alert("ID of member "+res[0].hasura_id);

			fetch('https://api.detoxification67.hasura-app.io/addmembers',
			 			{

			 				method: 'POST',
							headers: {
								'Content-type': 'application/json',
								"Authorization": "Bearer " + this.state.auth_token,
							},

							body: JSON.stringify({

								"hasura_id": res[0].hasura_id,
								"username": res[0].user_name,
								"groupid": this.state.groupid
							})

			 			}

			 			) 

			this.setState({phoneno: ''});

		}); 


	}










	SaveData = async () => {

		var value4 = await AsyncStorage.getItem('group_id');
		//alert(value4);

		this.setState({ groupid: parseInt(value4) });

		var value = await AsyncStorage.getItem('auth_token');
		//alert(value);
		this.setState({ auth_token: value });
	}

	componentDidMount() {


		this.SaveData().done();
	}

	render()
	{
		return (

				<View style={{ marginTop: 80 }}>
			<View style={{ flexDirection: 'row' }}>
			
			<Icon 
			name='phone'
			type='font-awesome'
			color='darkgrey'
			size={50}
			iconStyle={{ alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 20, marginRight: 55 }} />


			<Text style={{ justifyContent: 'center', alignItems: 'center' }}> Enter a Member's Mobile Number </Text>                                        

			</View>

			<TextInput
			value={this.state.phoneno}
			onChangeText={text => this.setState({ phoneno: text })}
			placeholder="9999988888"
			style={{ borderColor: 'white', height: 60, width: 240, alignItems: 'center', justifyContent: 'center',
			marginLeft: 135, fontSize: 18, fontWeight: 'bold' }}
			keyboardType='numeric'/>

			<Button
			title='Add'
			containerViewStyle={{ alignItems: 'center', justifyContent: 'center' }}
			onPress={ this.onButtonPress.bind(this)} />
			</View>


		);
	}


}

export default Addmembers;
