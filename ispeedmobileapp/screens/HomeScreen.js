import { gql } from '@apollo/client';
import { useSubscription } from '@apollo/react-hooks';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {
  showNotification
} from '../notifications/notification.android';
import InternetSpeedScreen from '../screens/InternetSpeedScreen';
import NewUserFlowScreen from '../screens/NewUserFlowScreen';





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
