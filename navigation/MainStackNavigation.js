import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import MyTabs from '../navigation/BottomTabNavigator';
import Detail from '../screens/Detail';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
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
      <Stack.Screen 
        name="Detail" 
        component={Detail} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
