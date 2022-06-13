import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Index = () => {
  const route: any = useRoute();
  const denuncia = route?.params?.denuncia;
  
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', padding: 20}}>
        <Image
          source={{uri: denuncia.image_url}}
          style={{height: 300, width: 300, borderRadius: 10}}
        />
        <Text style={{marginTop: 8, fontSize: 20, fontWeight: '900',}}>
          {denuncia?.title}
        </Text>
        <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
          {denuncia?.description}
        </Text>
        <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
          latitude: {denuncia?.latitude}
        </Text>
        <Text style={{marginTop: 2, fontSize: 15, fontWeight: '500'}}>
          longitude: {denuncia?.longitude}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Index;
