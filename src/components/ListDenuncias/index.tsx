import React from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import {useQuery} from '@apollo/client';
import DenunciaItem from '../ItemDenuncia';
import {CHARACTER_QUERY_LIST_PAGINATOR} from './querys';
import {Camera} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';

const Index = ({page}) => {

  const navigation: any = useNavigation();

  const {data,loading,error} = useQuery(CHARACTER_QUERY_LIST_PAGINATOR, {
    variables: {sort: "createdAt",order: "DESC",page: page},
  });

  if (loading)
    return <ActivityIndicator size={'large'} style={{padding: 20}} />;

  if (error) return <Text>El servidor ha fallado</Text>;
  
  const parseData = data?.listPaginator ? data?.listPaginator : [];

  return (
    <View style={{alignItems: 'center'}}>
               <TouchableOpacity
          onPress={async () => {
            const newCameraPermission = await Camera.requestCameraPermission();
            const newMicrophonePermission =
              await Camera.requestMicrophonePermission();
            const cameraPermission = await Camera.getCameraPermissionStatus();
            const microphonePermission =
              await Camera.getMicrophonePermissionStatus();

            navigation.navigate('Camera');
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
          <Text style={{color: 'white'}}>Subir Denuncia</Text>
        </TouchableOpacity>
      {parseData.map(item => {
        return <DenunciaItem denuncia={item} key={item?.id} />;
      })}
    </View>
  );
};

export default Index;
