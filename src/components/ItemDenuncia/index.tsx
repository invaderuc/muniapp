import {Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;

const CharacterItem = ({character}) => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {character});
      }}
      style={{maxWidth: '100%', paddingVertical: 20}}
      key={character.id}>
      <Image
        source={{uri: character?.image}}
        style={{height: 300, width: width * 0.9, borderRadius: 5}}
      />
      <Text style={{marginTop: 8, fontSize: 18, fontWeight: '800'}}>
        {character.name}
      </Text>
      <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
        id: {character.id}
      </Text>
      <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
        Type: {character.type}
      </Text>

      {character.status == 'Alive' ? (
        <Text
          style={{
            marginTop: 2,
            fontSize: 15,
            fontWeight: '500',
            color: 'green',
          }}>
          Status: {character.status}
        </Text>
      ) : (
        <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
          Status: {character.status}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CharacterItem;
