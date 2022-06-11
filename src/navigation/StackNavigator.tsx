import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Camera from '../screens/Camara';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{headerShown: true}}
        name="MuniApp"
        component={Home}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Camera" component={Camera} />
    </Stack.Navigator>
  );
}
