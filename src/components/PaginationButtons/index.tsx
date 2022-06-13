import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const PaginationButtons = ({setPage, page}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 20,
      }}>
     
      <TouchableOpacity
        disabled={page <= 1}
        onPress={() => {
          setPage(page - 1);
        }}
        style={{
          borderRadius: 16,
          alignSelf: 'center',
          shadowColor: "#000",
          shadowOffset: {
            width: 7,
            height: 5,
          },
          shadowOpacity: 1.58,
          shadowRadius: 9,
          elevation: 4,
          margin: 10,
          padding: 10,
          backgroundColor: '#fe5b29',
          alignItems: 'center'
        }}>
        <Text style={{color: 'white', fontSize: 18}}>Anterior</Text>
      </TouchableOpacity> 
      

      <TouchableOpacity
        onPress={() => {
          setPage(page + 1);
        }}
        style={{
          borderRadius: 16,
          alignSelf: 'center',
          shadowColor: "#000",
          shadowOffset: {
            width: 7,
            height: 5,
          },
          shadowOpacity: 1.58,
          shadowRadius: 9,
          elevation: 4,
          margin: 10,
          padding: 10,
          backgroundColor: '#fe5b29',
          alignItems: 'center'
        }}>
        <Text style={{color: 'white', fontSize: 18}}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaginationButtons;
