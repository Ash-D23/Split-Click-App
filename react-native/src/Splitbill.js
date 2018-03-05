import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage, ActivityIndicator } from 'react-native';
import { SearchBar, Button, Icon, Header, List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class Splitbill extends Component {

	static navigationOptions = {
		tabBarLabel: 'Split Bill',
		tabBarIcon: ({ tintColor }) => {
			return (
				<Icon
			name='tasks'
			type='font-awesome'
			color={tintColor}
			/>
			);
		}	
			

	}


state= { groupid: '', usercost: [[]], flag: true, activity: false, auth_token: '', index: 1, length: 0 }



onButtonPress() {

//hello
	
	this.setState({ activity:true });

fetch('https://api.detoxification67.hasura-app.io/avg/'+this.state.groupid, 
{

	method: 'GET',
	headers: {
		'Content-type': 'application/json',
	},



    })
    .then((response) => response.json())
    .then((res) => {

    	//alert(res.result[1][0]);

    	fetch('https://api.detoxification67.hasura-app.io/update',
    	{
    		method: 'POST',
    		headers: {
    			'Content-type': 'application/json',
    			"Authorization": "Bearer " + this.state.auth_token,
    		},

    		body: JSON.stringify({

    			"group_id": this.state.groupid,
    			"value": -res.result[1][0]

    		})




    	})
    	.then((response) => response.json())
    	.then((res) => {

    		
    		//alert(res.returning[0].user_due)

    		fetch('https://api.detoxification67.hasura-app.io/userjoindue/'+this.state.groupid,{

		method: 'GET',
	   headers: {
		'Content-type': 'application/json',
	   },    		


    	})
    	.then((response) => response.json())
    	.then((res) => {

    		//alert(res.result[1][1]);
    		this.setState({ usercost: res.result });
    		this.setState({ length: this.state.usercost.length })
    		//alert(this.state.length);
    		//alert(this.state.usercost[1][1]);
    		this.setState({ flag: false });
    		this.setState({ activity: false });

    		//put that loop here.
    		
    		
    		//my response is stored here.
    		//can you paste the response over here.
    		//im sending a pic on discord
    		// so in the

    	})

    	});





    });
    



}

/// can you sned this file to me? thru discord?
// yes

componentDidMount() {

		this.SaveData();
}		

SaveData = async () => {

var value5 = await AsyncStorage.getItem('group_id');
		
		this.setState({ groupid: parseInt(value5) });	

		var value = await AsyncStorage.getItem('auth_token');
		//alert(value);
		this.setState({ auth_token: value });



}


renderCost() {

return this.state.usercost.map((usercost)=>

<Text>{usercost.user_due}</Text>

)


}


conditionalRender() {

	if ((this.state.flag)&&(this.state.activity===false))
	{
		return(


			<Button
			title='Click to Split'
			containerViewStyle={{ alignItems: 'center', justifyContent: 'center',marginTop: 100 }}
			rounded
			backgroundColor='grey'
			onPress={ this.onButtonPress.bind(this)}
			 />



		);



	}

	else if(this.state.activity)
	{
		return (	
		<View style={{alignItems: 'center', justifyContent: 'center',marginTop: 100}}>
		<ActivityIndicator />
		</View>
		);

	} 

	else 
	{
		
		/* for (var i = 0; i < this.state.usercost.length; ++i) {
  for (var j = 0; j < this.state.usercost[i].length; ++j)
    //console.log(myArray[i][j]);
    alert(this.state.usercost[i][j]);
} */
     


if(this.state.usercost[1][4]<0)
{


	return(

			<View style={{alignItems: 'center', justifyContent: 'center',marginTop: 100}}>
			<Text style={{fontSize: 18, fontWeight: 'bold' }}> You OWE (for bill {this.state.usercost[1][2]}):</Text>
			<Text style={{fontSize:16}}>${Math.abs(this.state.usercost[1][4])}</Text>


			</View>

	);
}

else if(this.state.usercost[1][4]>0)
{

return (

			<View style={{alignItems: 'center', justifyContent: 'center',marginTop: 100}}>
			<Text style={{fontSize: 18, fontWeight: 'bold' }}> You are Owed (for bill {this.state.usercost[1][2]}):</Text>
			<Text style={{fontSize:16}}>${this.state.usercost[1][4]}</Text>


			</View>

	);

}

else
{



	return(  <View style={{alignItems: 'center', justifyContent: 'center',marginTop: 100}}>
			<Text style={{fontSize: 18, fontWeight: 'bold' }}> All Accounts are settled</Text>

			</View>

			);

}









//try here, now run this

 /* return(
	<View>
	    <Text>{JSON.stringify(this.state.usercost)}:</Text>
   < /View>


	

//
//can you go down a liitle bit

	); 

*/
	
     
//ya try no
      	
      	

    /*  return (
      	
         
      while(this.state.index<this.state.length)

      {

      
      	//where is the error?
      	//what are you doing now?
      	//you told me to place the return outide the while loop
      	//after that i told you to stop.
      	//and do 
      	//lets stop for a moment.//
//first do this and tell me what is printing
//try this

    
}

//comment out all the test code.
//the run it on emulator.

// this is to see if we can print all elements. 
//may be we should user alert instead of console.
//so alert()?

      	<View>
      	<Text>{this.state.usercost[this.state.index][1]}:</Text>
      	<Text>{this.state.usercost[this.state.index][4]}</Text>
      	</View>


      	this.setState({ index: this.state.index+1 })
 		}



      	);
      	*/
	}

}		

	render() {

		return(

		<View>

		<Header 
			 centerComponent={{ text: 'Split bill', style: { color: '#fff', letterSpacing: 3 } }}
			backgroundColor='#9E9E9E' />

			{this.conditionalRender()}


		</View>	

			);


	}


}

export default Splitbill;
 
/*

{
    "result_type": "TuplesOk",
    "result": [
        [
            "hasura_id",
            "user_name",
            "bill_name",
            "group_id",
            "user_due"
        ],
        [
            "12",
            "User",
            "Lunch",
            "133",
            "-100"
        ],
        [
            "10",
            "kamal",
            "Lunch",
            "133",
            "100"
        ]
    ]
}

so basicaly i need to acces res.result which is stored in usercost as 2D array. so i have to access usercost[i][1] and usercost[i][4]
one sec.
in which variable "result" is stored.


*/
