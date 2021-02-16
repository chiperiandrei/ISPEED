import { gql } from '@apollo/client';
import { useSubscription } from '@apollo/react-hooks';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';


const NEW_USER = gql`
  subscription newUser {
    newUser {
      firstname
      lastname
      username
    }
  }
`;

const NewUserFlowScreen = () => {
  const {loading, data, error} = useSubscription(NEW_USER);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    data ? setUsers([...data.newUser.firstname]) : null;
  }, [data]);
  return <View>{users ? console.log(users) : null}</View>;
};

export default NewUserFlowScreen;
