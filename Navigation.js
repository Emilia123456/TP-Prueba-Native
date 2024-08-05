import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Home from './Home';
import Buscar from './Buscar';
import Screen2 from './Screen2';

const StackA = createStackNavigator();
const StackB = createStackNavigator();

function StackANavigator() {
  return (
    <StackA.Navigator initialRouteName="Home">
      <StackA.Screen name="Login" component={Login} />
      <StackA.Screen name="Home" component={Home} />
    </StackA.Navigator>
  );
}



function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="Buscar" component={Buscar} />
      <StackB.Screen name="Screen2" component={Screen2} />
    </StackB.Navigator>
  );
}

export default StackBNavigator;


export { StackANavigator, StackBNavigator };
