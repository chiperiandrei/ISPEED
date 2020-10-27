import React from 'react';

import LoginScreen from '../screens/LoginScreen';
import ForgotScreen from '../screens/ForgotScreen';
import RegisterScreen from '../screens/RegisterScreen';

import HomeScreen from '../screens/HomeScreen';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const authScreens = {
  SignIn: LoginScreen,
  SignUp: RegisterScreen,
  Forgot: ForgotScreen,
};

const userScreens = {
  Home: HomeScreen,
};

const AppNavigator = ({isLoggedIn}) => {
  return (
    <Stack.Navigator>
      {Object.entries({
        ...(isLoggedIn ? userScreens : authScreens),
      }).map(([name, component]) => (
        <Stack.Screen
          name={name}
          component={component}
          key={name}
          options={{
            headerShown: !['SignIn', 'SignUp', 'Forgot'].includes(name),
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AppNavigator;
