import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Index = () => {
  const route: any = useRoute();
  const character = route?.params?.character;
  
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', padding: 20}}>
        <Image
          source={{uri: character.image}}
          style={{height: 300, width: 300, borderRadius: 10}}
        />
        <Text style={{marginTop: 8, fontSize: 20, fontWeight: '800'}}>
          {character.name}
        </Text>
        <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
          Genero: {character.gender}
        </Text>
        <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
          Tipo: {character.type}
        </Text>

        {character.status == 'Alive' ? (
          <Text
            style={{
              marginTop: 2,
              fontSize: 15,
              fontWeight: '500',
              color: 'green',
            }}>
            Estado: {character.status}
          </Text>
        ) : (
          <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
            Status: {character.status}
          </Text>
        )}
        <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
          Localización: {character?.location.name}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Index;
