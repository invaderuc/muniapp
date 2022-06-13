import {Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;

const DenunciaItem = ({denuncia}) => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detalle', {denuncia});
      }}
      style={{maxWidth: '100%', paddingVertical: 20}}
      key={denuncia.id}>
      <Image
        source={{uri: denuncia?.image_url}}
        style={{height: 300, width: width * 0.9, borderRadius: 5}}
      />
      <Text style={{marginTop: 8, fontSize: 18, fontWeight: '800'}}>
        {denuncia.title}
      </Text>
      <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
        {denuncia.description}
      </Text>
    </TouchableOpacity>
  );
};

export default DenunciaItem;
