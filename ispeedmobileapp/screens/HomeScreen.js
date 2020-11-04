import React, {useEffect, useState} from 'react';
import {View, Text, Button, Alert, Platform} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Entypo';

import {gql} from '@apollo/client';
import {useSubscription} from '@apollo/react-hooks';
import {
  showNotification
} from '../notifications/notification.android';

import NewUserFlowScreen from '../screens/NewUserFlowScreen';
import InternetSpeedScreen from '../screens/InternetSpeedScreen';

const NEW_USER = gql`
  subscription newUser {
    newUser {
      firstname
      lastname
      username
    }
  }
`;
const HomeTabs = createBottomTabNavigator();

const HomeScreen = () => {
  const [counter, setCounter] = useState(0);
  const {loading, data, error} = useSubscription(NEW_USER);
  const [lastusernamejoined, setLastusernamejoined] = useState('');
  const handlePushNotification = (message, username) => {
    showNotification(12, message);
    setLastusernamejoined(username);
  };
  return (
    <HomeTabs.Navigator
      initialRouteName="InternetSpeedScreen"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      {data && lastusernamejoined !== data.newUser.username
        ? handlePushNotification(
            `User ${data.newUser.firstname} joined!`,
            data.newUser.username,
          )
        : null}
      <HomeTabs.Screen
        name="InternetSpeedScreen"
        component={InternetSpeedScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({size}) => (
            <Icon name="network" size={size} color="#e91e63" />
          ),
        }}
      />
      <HomeTabs.Screen
        name="NewUserFlowScreen"
        component={NewUserFlowScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({size}) => (
            <Icon name="users" size={size} color="#e91e63" />
          ),
        }}
      />
    </HomeTabs.Navigator>
  );
};

export default HomeScreen;
