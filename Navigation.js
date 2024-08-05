import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Home from './Home';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const StackA = createStackNavigator();
const StackB = createStackNavigator();

function StackANavigator() {
  return (
    <StackA.Navigator initialRouteName="Login">
      <StackA.Screen name="Login" component={Login} />
      <StackA.Screen name="Home" component={Home} />
    </StackA.Navigator>
  );
}

function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="Screen1" component={Screen1} />
      <StackB.Screen name="Screen2" component={Screen2} />
    </StackB.Navigator>
  );
}

export { StackANavigator, StackBNavigator };
