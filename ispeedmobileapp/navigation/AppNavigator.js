import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button } from 'react-native';
import ForgotScreen from '../screens/ForgotScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';



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
