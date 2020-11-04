import React, {useEffect, useState} from 'react';
import {View, Text, Button, Alert, Platform} from 'react-native';

import {gql} from '@apollo/client';
import {useSubscription} from '@apollo/react-hooks';
import {
  showNotification,
  handleScheduleNotification,
  handleCancel,
} from '../notifications/notification.android';

const NEW_USER = gql`
  subscription newUser {
    newUser {
      firstname
      lastname
      username
    }
  }
`;

const HomeScreen = () => {
  const [counter, setCounter] = useState(0);
  const {loading, data, error} = useSubscription(NEW_USER);
  const [lastusernamejoined, setLastusernamejoined] = useState('');
  const handlePushNotification = (message, username) => {
    showNotification(12, message);
    setLastusernamejoined(username);
  };
  return (
    <View>
      {loading ? <Text>Loading</Text> : null}
      <Text>{counter}</Text>

      <Button
        onPress={() => setCounter(counter + 1)}
        title="Press it"
        color="#841584"
      />

      {data && lastusernamejoined !== data.newUser.username
        ? handlePushNotification(
            `User ${data.newUser.firstname} joined!`,
            data.newUser.username,
          )
        : null}
    </View>
  );
};

export default HomeScreen;
