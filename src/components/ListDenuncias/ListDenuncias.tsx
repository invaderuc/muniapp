import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
const Stack = createNativeStackNavigator();

export default function ListDenuncias() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

    </View>
  );
}