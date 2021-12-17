/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 

const App = () => {
  return (
    <SafeAreaView style={{flexDirection: 'column', flex: 1}}>
      <View style={{backgroundColor: 'red', flex: 1}} />
      <View style={styles.zoneVert}>
        <View style={styles.zoneJaune} />
        <View style={styles.zoneJaune} />
        <View style={styles.zoneJaune} />
      </View>
      <View style={{backgroundColor: 'blue', flex: 3}} />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  zoneJaune: {
    backgroundColor: 'yellow',
    height: 50,
    width: 50,
    borderWidth: 5,
    borderColor: 'black',
  },
  zoneVert: {
    backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;
