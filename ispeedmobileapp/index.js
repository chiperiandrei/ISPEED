import React from 'react';

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {split, HttpLink} from '@apollo/client';
import {getMainDefinition} from '@apollo/client/utilities';
import {WebSocketLink} from '@apollo/client/link/ws';
import PushNotification from 'react-native-push-notification';


const API_DEV =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://192.168.0.128:5000';

const API_PROD = 'https://server hostat';

const API = __DEV__ ? API_DEV : API_PROD;

const SOCKET_API =
  Platform.OS === 'ios'
    ? 'ws://localhost:5000/subscription'
    : 'ws://192.168.0.128:5000/subscription';

const httpLink = new HttpLink({
  uri: API,
});

const wsLink = new WebSocketLink({
  uri: SOCKET_API,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: 'plm',
    },
  },
});

const link = split(
  ({query}) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const Client = () => {
  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};
PushNotification.createChannel(
  {
    channelId: '12', 
    channelName: 'New users', 
    channelDescription: 'A channel for new users queue', 
    soundName: 'siren.mp3',
  }
);

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);

  },

  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});

AppRegistry.registerComponent(appName, () => Client);
