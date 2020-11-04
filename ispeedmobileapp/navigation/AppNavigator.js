import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import ForgotScreen from '../screens/ForgotScreen';
import RegisterScreen from '../screens/RegisterScreen';

import HomeScreen from '../screens/HomeScreen';

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
            headerShown: false,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AppNavigator;
