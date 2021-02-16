import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = () => {
  const client = new ApolloClient({
    uri: "http://localhost:5000/",
    cache: new InMemoryCache(),
  });
  return client;
};

export default apolloClient;
