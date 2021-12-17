/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';


const App = () => {
  return (
    <SafeAreaView style={{ flexDirection: 'column', flex: 1 }}>
      <Text style={styles.titleInscription}>Inscription</Text>
      <Image source={{ uri: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?b=1&k=20&m=1223671392&s=170667a&w=0&h=J-o-ntQutLd5iHQEWAd-huWt8uBanu4O8V0O1BaG7nU=" }} style={styles.profileImg} />
      <TextInput style={styles.textInput} placeholder='Prénom' ></TextInput>
      <TextInput placeholder='Nom' style={styles.textInput}></TextInput>
      <TextInput placeholder='Mot de passe' onChangeText={(text) => setMdp(text)}
          value={mdp} style={styles.textInput} secureTextEntry={true}></TextInput>
      <TextInput placeholder='Confirmation du mot de passe' style={styles.textInput} secureTextEntry={true}></TextInput>

      <TouchableOpacity
        style={styles.buttonSupp}
        onPress={() => alert('Inscription enregistré')}>
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
};

export default App;
