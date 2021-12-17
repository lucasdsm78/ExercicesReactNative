import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Inscription: () => Node = () => {
  const [mdp, setMdp] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [mdpconf, setMdpConf] = useState('');

  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    if (mdp !== "" && mdp.length < 3) {
      setInvalid(true);
    }
    else {
      setInvalid(false);
    }
  }, [mdp]);

  useMemo(() => {
    if (mdp !== mdpconf) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  }, [mdp, mdpconf]);

  const sendMessage = useCallback(() => {
    alert(`Bonjour ${nom} ${prenom}, votre mot de passe est ${mdp}`);
  }, [nom, prenom, mdp]);


  return (
    <SafeAreaView style={{ flexDirection: 'column', flex: 1 }}>
      <Text style={styles.titleInscription}>Inscription</Text>
      <Image source={{ uri: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?b=1&k=20&m=1223671392&s=170667a&w=0&h=J-o-ntQutLd5iHQEWAd-huWt8uBanu4O8V0O1BaG7nU=" }} style={styles.profileImg} />
      <TextInput value={prenom} onChangeText={(text) => setPrenom(text)} style={styles.textInput} placeholder='Prénom' ></TextInput>
      <TextInput value={nom} placeholder='Nom' onChangeText={(text) => setNom(text)} style={styles.textInput}></TextInput>
      <TextInput placeholder='Mot de passe' onChangeText={(text) => setMdp(text)}
        value={mdp} style={
          invalid
            ? [styles.invalidMdp, styles.textInput]
            : [styles.bonMdp, styles.textInput]
        } secureTextEntry={true}></TextInput>
      <TextInput onChangeText={(text) => setMdpConf(text)} placeholder='Confirmation du mot de passe' value={mdpconf} style={
        invalid
            ? [styles.invalidMdp, styles.textInput]
            : [styles.bonMdp, styles.textInput]} secureTextEntry={true}></TextInput>

      <TouchableOpacity
        style={styles.buttonSupp}
        onPress={sendMessage}>
        <Text>Envoyer</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  titleInscription: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25
  },
  bonMdp: {
    borderWidth: 2,
    borderColor: 'black',
  },
  invalidMdp: {
    borderWidth: 2,
    borderColor: 'red',
  },
  buttonSupp: {
    padding: 15,
    width: 100,
    top: 10,
    borderRadius: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,


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