import React, {createContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

export const ImageContext = createContext({});

const Index = () => {
  const client = new ApolloClient({
    uri: 'https://muni-denuncia-api.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  });

  const [photo, setPhoto] = useState();

  return (
      <ImageContext.Provider value={{ photo, setPhoto}}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </ApolloProvider>
      </ImageContext.Provider>
  );
};

export default Index;
