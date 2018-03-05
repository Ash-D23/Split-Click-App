import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Entry from './entry';
import Login from './Login';
import Signup from './Signup';
import Menu from './Menu';
import Groups from './Groups';
import Addgroup from './Addgroup';
import Addmembers from './Addmembers';
import { Actions } from 'react-native-router-flux';
import Insertbill from './Insertbill';
import Addcost from './Addcost';

const RouterComponent = () => {
	return (
		<Router>
	<Scene key="root" hideNavBar>
	<Scene key="auth">
	<Scene key="Entry" component={Entry} hideNavBar initial />
	   <Scene key="Login" component={Login} title="Login" />
	   <Scene key="Signup" component={Signup} title="Sign up" />
	  </Scene>

	  <Scene key="main">
	  <Scene key="Menu" component={Menu} hideNavBar />
	  <Scene key="Groups" component={Groups} hideNavBar />
	  <Scene key="Addgroup" component={Addgroup} title="Create a group" />
	  <Scene key="Addmembers" component={Addmembers} title="Add a group member" rightTitle="Done" onRight={ ()=> Actions.Menu() } />
	  
	  
	  <Scene key="Insertbill" component={Insertbill} hideNavBar />
	  <Scene key="Addcost" component={Addcost} title="Add Cost" />


	  </Scene>


	 </Scene> 
		</Router>  
		);

};

export default RouterComponent;
