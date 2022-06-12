import React from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import {useQuery, useMutation} from '@apollo/client';
import DenunciaItem from '../ItemDenuncia';
import {CHARACTER_QUERY_LIST_PAGINATOR} from './querys';
import {Camera} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

const Index = ({page}) => {

  const {data,loading,error} = useQuery(CHARACTER_QUERY_LIST_PAGINATOR, {
    variables: {sort: "createdAt",order: "DESC",page: page},
  });

  if (loading)
    return <ActivityIndicator size={'large'} style={{padding: 20}} />;

  if (error) return <Text>El servidor ha fallado</Text>;
  

  const parseData = data?.listPaginator ? data?.listPaginator : [];
  console.log(data);
  console.log(parseData);
  const navigation: any = useNavigation();
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
            backgroundColor: 'black',
            padding: 8,
            borderRadius: 5,
            width: '50%',
            alignItems: 'center',
            marginTop: 10,
            alignSelf: 'center',
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
