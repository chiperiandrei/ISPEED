import { ApolloProvider } from "@apollo/client";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Users from "./components/Users";
import apolloClient from "./utils/apolloClient";

function App() {
  const client = apolloClient();
  return (
    <ApolloProvider client={client}>
      <Header />
      <Users />
    </ApolloProvider>
  );
}

export default App;
