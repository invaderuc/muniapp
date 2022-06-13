import {View, Text, StyleSheet, TouchableOpacity,TextInput,SafeAreaView} from 'react-native';
import React, {useRef, useContext} from 'react';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import {ImageContext} from '../../navigation/Index';
import GetLocation from 'react-native-get-location';
import {useNavigation} from '@react-navigation/native';

const Index = () => {

  const camera: any = useRef();
  const {setPhoto, photo}: any = useContext(ImageContext);
  const navigation: any = useNavigation();

  const devices = useCameraDevices();
  const device = devices.back;

  if (device == null) return <Text>Loading</Text>;

  const doPhoto = async () => {
    const photoLocal = await camera.current.takeSnapshot({});

    setPhoto(photoLocal);
    
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(location => {
      navigation.navigate('Enviar', {location});
      
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    });
  };
  
  return (
    <>
      <Camera
        ref={camera}
        photo={true}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
      <TouchableOpacity style={styles.uploadButton} onPress={doPhoto}>
        <Text style={{color: 'white', fontSize: 18}} >Tomar foto</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  uploadButton: {
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
  }
});

export default Index;
