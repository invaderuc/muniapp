import React, {createContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

export const CartContext = createContext({});
export const AuthContext = createContext({});

const Index = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:8002/graphql',
    cache: new InMemoryCache(),
  });

  const [photo, setPhoto] = useState();

  return (
      <CartContext.Provider value={{ photo, setPhoto}}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </ApolloProvider>
      </CartContext.Provider>
  );
};

export default Index;
