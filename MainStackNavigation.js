import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import MyTabs from './BottomTabNavigator';

const MainStack = createStackNavigator();

function MainStackNavigator() {
  return (
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} // Ocultar encabezado
      />
      <MainStack.Screen 
        name="HomeTabs" 
        component={MyTabs} 
        options={{ headerShown: false }} // Ocultar encabezado para las pestañas
      />
    </MainStack.Navigator>
  );
}

export default MainStackNavigator;
