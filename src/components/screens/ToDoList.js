import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const TodoListScreen = props => {
  const navigation = useNavigation();

    const [item, setItems] = useState([]);
    const data = [
      {title: 'Faire les courses'},
      {title: 'Faire le ménage'},
      {title: 'Ranger la chambre'}, 
    ];

    const saveData = async data => {
      const json = JSON.stringify(data);
      await AsyncStorage.setItem('todos', json);
    }

    const loadData = async () => {
      const json = await AsyncStorage.getItem('todos');
      setItem(json);
      return JSON.parse(json);
      }

      useEffect(() => {
        saveData(data);
        loadData();
      })



  

  
    return (
      <SafeAreaView style={styles.container}>

           <FlatList
        data={itm}
        renderItem={({item}) => <Text>{item}</Text>}
      />
    
   
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    input: {
      borderBottomColor: 'black',
    },
    buttonSupp: {
      height: 10,
      marginTop: 50,
  
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  
  
  
  export default TodoListScreen;
  