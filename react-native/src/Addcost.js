import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage } from 'react-native';
import { SearchBar, Button, Icon, Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


class Addcost extends Component {

	state= { userdata: [], bill_name: '', groupid: '', index: 0, userpayed: '', groupname: '', auth_token: '' };

	onButtonPress() {

		//alert(this.state.userpayed);

		fetch('https://api.detoxification67.hasura-app.io/insertbill',
		{
			method: 'POST',
				headers: {
					'Content-type': 'application/json',
					"Authorization": "Bearer " + this.state.auth_token,
				},

				body: JSON.stringify({
								"groupid": this.state.groupid,
								"hasura_id": this.state.userdata[this.state.index].hasura_id,
								"bill_name": this.state.bill_name,
								"user_payed": this.state.userpayed
								
							})

		}



			)
		.then(this.setState({ userpayed: ''}));



		//alert(this.state.userdata[this.state.index].user_name)
		this.setState({ index: this.state.index+1 });
	}


	
	//alert(this.state.groupid);

	componentDidMount() {


		this.SaveData();

		//alert(this.state.groupid);




		/*
		//fetch('https://api.detoxification67.hasura-app.io/userlist/'+this.state.groupid,

		{

			method: 'GET',
			headers: {
					'Content-type': 'application/json',
				},

			})
		.then((response) => response.json())
		.then((res) =>
		{

			this.setState({ userdata: res });
			alert(this.state.userdata[0].user_name);


			});  */
	}


	SaveData = async () => {

		var value4 = await AsyncStorage.getItem('bill_name');
		//alert(value4);

		this.setState({ bill_name: value4 });
		//alert(this.state.bill_name);

		var value5 = await AsyncStorage.getItem('group_id');
		//alert(value4);

		this.setState({ groupid: parseInt(value5) });

		var value6 = await AsyncStorage.getItem('groupname');
		this.setState({ groupname: value6 });

		var value = await AsyncStorage.getItem('auth_token');
		//alert(value);
		this.setState({ auth_token: value });


		//alert(this.state.groupid);
		//you can call insertbill here. you have billname, groupid,
		//i cant insert bill here beacuse it reuires the user_payed as well which will be input from user. i can

		fetch('https://api.detoxification67.hasura-app.io/userlist/'+this.state.groupid,

		{

			method: 'GET',
			headers: {
					'Content-type': 'application/json',
				},

			})
		.then((response) => response.json())
		.then((res) =>
		{

			this.setState({ userdata: res });
			
			});

	}

	initialRender()
	{

		return (

			<View style={{ marginTop: 80 }}>
			<View style={{ flexDirection: 'row' }}>
			
			<Icon 
			name='user'
			type='font-awesome'
			color='darkgrey'
			size={50}
			iconStyle={{ alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 25, marginRight: 55 }} />


			<Text style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 40 }}> Enter  Cost of each User </Text>                                        

			</View>

			<TextInput
			value={this.state.userpayed}
			onChangeText={text => this.setState({ userpayed: text })}
			placeholder="$0.00"
			style={{ borderColor: 'white', height: 60, width: 240, alignItems: 'center', justifyContent: 'center',
			marginLeft: 160, fontSize: 18, fontWeight: 'bold' }}
			keyboardType='numeric'
			/>

			<Button
			title='Add'
			containerViewStyle={{ alignItems: 'center', justifyContent: 'center' }}
			onPress={ this.onButtonPress.bind(this)} />
			</View>


			);



	}

	conditionalRender() {

		if (((this.state.index)<(this.state.userdata.length)))
		{
			return ( <View style={{ marginTop: 80 }}>
			<View style={{ flexDirection: 'row' }}>
			
			<Icon 
			name='user'
			type='font-awesome'
			color='darkgrey'
			size={50}
			iconStyle={{ alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 25, marginRight: 55 }} />


			<Text style={{ justifyContent: 'center', alignItems: 'center', marginLeft:40 }}> Enter  Cost of each User </Text>                                        

			</View>

			<TextInput
			value={this.state.userpayed}
			onChangeText={text => this.setState({ userpayed: text })}
			placeholder="$0.00"
			style={{ borderColor: 'white', height: 60, width: 240, alignItems: 'center', justifyContent: 'center',
			marginLeft: 160, fontSize: 18, fontWeight: 'bold' }}
			keyboardType='numeric'
			/>

			<Button
			title='Add'
			containerViewStyle={{ alignItems: 'center', justifyContent: 'center' }}
			onPress={ this.onButtonPress.bind(this)} />
			</View>
			);

		}

		else
		{
			return (
				<View style={{alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>

				<Text> You have successfully added the cost of all members of group {this.state.groupname} for the bill named {this.state.bill_name} </Text>
				<Button
			   title='Click to continue'
			   containerViewStyle={{ alignItems: 'center', justifyContent: 'center' }} 
			   onPress={() => Actions.Menu() }/>
			   
				</View>
				);
		}	


	}

render() {

	return (
		<View>

		{this.state.index===0?this.initialRender():this.conditionalRender()}
		</View>
				

		);
}


}

export default Addcost;
