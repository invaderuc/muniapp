import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Detalle from '../screens/Detalle';
import Camera from '../screens/Camara';
import Enviar from '../screens/Enviar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{headerShown: true}}
        name="MuniApp"
        component={Home}
      />
      <Stack.Screen name="Detalle" component={Detalle} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="Enviar" component={Enviar} />
    </Stack.Navigator>
  );
}
