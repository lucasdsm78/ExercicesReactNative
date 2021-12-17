import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const Inscription: () => Node = () => {
  return (
    <SafeAreaView style={{ flexDirection: 'column', flex: 1 }}>
      <Text style={styles.titleInscription}>Inscription</Text>
      <Image source={{ uri: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?b=1&k=20&m=1223671392&s=170667a&w=0&h=J-o-ntQutLd5iHQEWAd-huWt8uBanu4O8V0O1BaG7nU=" }} style={styles.profileImg} />
      <TextInput style={styles.textInput} placeholder='Prénom' ></TextInput>
      <TextInput placeholder='Nom' style={styles.textInput}></TextInput>
      <TextInput placeholder='Mot de passe' style={styles.textInput} secureTextEntry={true}></TextInput>
      <TextInput placeholder='Confirmation du mot de passe' style={styles.textInput} secureTextEntry={true}></TextInput>

      <Button
        style={styles.buttonSupp}
        title="Envoyer"
        onPress={() => alert('Inscription enregistré')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  titleInscription: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25
  },
  buttonSupp: {
    height: 10,
    width: 10,
    marginTop: 50,


  },
  profileImg: {
    height: 80,
    width: 80,
    top: 10,
    borderRadius: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textInput: {
    height: 50,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
  }
});

export default Inscription;