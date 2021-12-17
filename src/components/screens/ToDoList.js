import React, { useCallback, useMemo, useState } from 'react';
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const TodoListScreen = props => {
  const navigation = useNavigation();

    const [todo, setToDo] = useState();
    const [item, setItem] = useState([
      'Faire les courses',
      'Faire le ménage',
      'Ranger la chambre',  
    ]);
    const [search, setSearch] = useState('');
  
    const insertData = () => {
      setItem([...item, todo])
      setToDo(null);
    }
    
    const suppToDo = (index) => {
      let sameItem = [...item];
      sameItem.splice(index, 1);
      setItem(sameItem)
    };
  
    const searchFilterFunction = (text) => {
      let sameItem = [...item];
      if(text){
        let filteredName = item.filter((item) => {
          const textData = text.toLowerCase();
          return item.toLowerCase().indexOf(textData) > -1;
        });
        setItem(filteredName);
        setSearch(text);
      }
      else {
        setItem(sameItem)
        setSearch(text);
      }
    };
  
    const TodoListItem = ({ title, index }) => (
      <View style={styles.item}>
        <View style={styles.ligne}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('ToDoListItem', {title: title});
          }}>
          <Text>{title}</Text></TouchableOpacity>
          <Button
            style={styles.buttonSupp}
            title="Supprimer"
            onPress={() => suppToDo(index)}
          />
        </View>
      </View>
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          placeholder="Rechercher"
        />
        <View style={styles.items}>
          {
            item.map((item, index) => {
              return (
                <TouchableOpacity>
                  <TodoListItem key={index} title={item} />
                </TouchableOpacity>
              )
            })
          }
        
        </View>
        <TextInput
          style={styles.input}
          placeholder="A faire"
          value={todo}
          onChangeText={title => setToDo(title)}
        />
        <Button
          style={styles.buttonSupp}
          onPress={() => insertData()}
          title="Ajouter"
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
  