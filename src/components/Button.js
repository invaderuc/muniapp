import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Button = ({screenName, text}) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(screenName);
        }}
        style={styles.button}>
        <Text style={{color: 'white', fontSize: 19}}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    margin: 7,
    marginHorizontal: 35,
  },
});
export default Button;
