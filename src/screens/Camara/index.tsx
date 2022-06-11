import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef, useContext} from 'react';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import {CartContext} from '../../navigation/Index';
import GetLocation from 'react-native-get-location';

const Index = () => {
  const camera: any = useRef();
  const {setPhoto, photo}: any = useContext(CartContext);

  const devices = useCameraDevices();
  console.log('====================================');
  console.log();
  console.log('====================================');
  console.log(photo);
  const device = devices.front;

  if (device == null) return <Text>Loading</Text>;

  const doPhoto = async () => {
    const photoLocal = await camera.current.takeSnapshot({});

    console.log(photoLocal);

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(location => {
        console.log(location);
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    });

    setPhoto(photoLocal);
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
      <TouchableOpacity onPress={doPhoto}>
        <Text>Take Photo</Text>
      </TouchableOpacity>
    </>
  );
};

export default Index;
