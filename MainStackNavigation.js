import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import MyTabs from './BottomTabNavigator';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Tabs" 
        component={MyTabs} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
