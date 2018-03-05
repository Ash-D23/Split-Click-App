import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage } from 'react-native';
import { SearchBar, Button, Icon, Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';



class Insertbill extends Component {



		static navigationOptions = {
		tabBarLabel: 'Insert Bill',
		tabBarIcon: ({ tintColor }) => {
			return (
				<Icon
			name='plus-square'
			type='font-awesome'
			color={tintColor}
			/>
			);
		}	
			

	}

	state= { bill_name: '' }

	onButtonPress() {


		AsyncStorage.setItem('bill_name', this.state.bill_name);

		Actions.Addcost()

	}

render()
	{
		return (

		<View>
			<Header 
			 centerComponent={{ text: 'INSERT BILL', style: { color: '#fff', letterSpacing: 3 } }}
			backgroundColor='#9E9E9E' />


			<View style={{ flexDirection: 'row', marginTop: 20 }}>
			
			<Icon name='home'
			type='font-awesome'
			color='darkgrey'
			size={50}
			iconStyle={{ alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 20, marginRight: 55}} />


			<Text style={{ justifyContent: 'center', alignItems: 'center' }}> Enter Bill Name </Text>

			</View>

			<TextInput
			placeholder="Bill Name"
			value={this.state.bill_name}
			onChangeText={text => this.setState({ bill_name: text })}
			style={{ borderColor: 'white', height: 60, width: 240, alignItems: 'center', justifyContent: 'center',
			marginLeft: 135, fontSize: 18, fontWeight: 'bold' }}
			/>

			<Button
			title='Confirm'
			containerViewStyle={{ alignItems: 'center', justifyContent: 'center', marginRight: 50 }}
			onPress={this.onButtonPress.bind(this)} />

		</View>	


		);

	}


}

export default Insertbill;
