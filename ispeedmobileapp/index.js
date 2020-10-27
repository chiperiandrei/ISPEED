/**
 * @format
 */
import React from 'react';

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// Initialize Apollo Client

const API_DEV =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://192.168.0.128:5000';

const API_PROD = 'https://server hostat';

const API = __DEV__ ? API_DEV : API_PROD;

const Client = () => {
  const client = new ApolloClient({
    uri: API,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

AppRegistry.registerComponent(appName, () => Client);
