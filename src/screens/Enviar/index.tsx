import { SafeAreaView, StyleSheet, TextInput,View,TouchableOpacity, Text, Dimensions } from "react-native";
import React, {useContext,useState} from 'react';
import {CHARACTER_MUTATION_CREATE} from '../../components/ListDenuncias/querys';
import {useMutation} from '@apollo/client';
import { Image } from 'react-native-compressor';
import axios from "axios";
import {ImageContext} from '../../navigation/Index';
import {useNavigation,useRoute} from '@react-navigation/native';
//import { useSelector } from "react-redux";

const Index = () => {

  const route: any = useRoute();
  const {setPhoto, photo}: any = useContext(ImageContext);
  const [loagingEnviar, setLoadingEnviar] = useState(false);
  const navigation: any = useNavigation();
  const [title, onChangeTitle] = React.useState("");
  const [description, onChangeDescripction] = React.useState("");
  const [location, onChangeLocation] = React.useState(route?.params?.location);
  const [create, { data, loading, error }] = useMutation(CHARACTER_MUTATION_CREATE);

  const doSend = async () => {

    setLoadingEnviar(true);
    if(title != "" && description != ""){
      const result = await Image.compress(photo.path, {
        maxWidth: 20,
        quality: 0.2,
        returnableOutputType:'base64'
      });
  
      var postData = {
        image:"data:image/jpeg;base64,"+result
      };
  
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
      
      axios.post('https://muni-denuncia-api.herokuapp.com/api/uploadimages', postData, axiosConfig)
      .then((response) => {
        
        create({ variables: { 
          title:title,
          description:description,
          status:"Active",
          image_url:response.data.url,
          image_public_id:response.data.public_id,
          altitude:location.altitude,
          latitude:location.altitude,
          longitude:location.altitude,
          speed:location.speed
        } });
  
        if (navigation.canGoBack())
          navigation.popToTop(); // Go back to the root of the stack
      })
      .catch((err) => {
        alert("Error al subir imagen");
      })
    }else{
      alert("Debe ingresar título y descripción");
      setLoadingEnviar(false);
    }
  }
  
  return (
    <SafeAreaView>
      <View style={styles.imageContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        placeholder={"Título"}
        value={title}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeDescripction}
        placeholder={"Descripción"}
        value={description}
      />

      { loagingEnviar == false ? 
      <TouchableOpacity style={styles.uploadButton} onPress={doSend}>
        <Text style={styles.uploadButtonText}>
          Enviar denuncia
        </Text>
      </TouchableOpacity>
       : <Text style={styles.uploadButtonText}>Espere un momento...</Text> }
      </View>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    alignSelf: 'center',
  },
  imageContainer: {
    backgroundColor: '#fe5b29',
    height: Dimensions.get('window').height
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  uploadContainer: {
    backgroundColor: '#f6f5f8',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height: 200,
  },
  uploadContainerTitle: {
    alignSelf: 'center',
    fontSize: 25,
    margin: 20,
    fontFamily: 'Roboto'
  },
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
    width: Dimensions.get('window').width - 60,
    alignItems: 'center'
  },
  uploadButtonText: {
    color: '#f6f5f8',
    fontSize: 20,
    fontFamily: 'Roboto',
    alignSelf: 'center'
  }
});

export default Index;