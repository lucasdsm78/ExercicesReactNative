import React from 'react';
import type { Node } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    Button,
    Text,
} from 'react-native';



const TodoListItemScreen = ({route}) => {
    const { title } = route.params;
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Text>Ma Todo :</Text>
            <Text>{title}</Text>
            <Button 
            title="Retour"
            onPress={() => {
            navigation.goBack();
          }}>
          </Button>
        </SafeAreaView>
    );
}

export default TodoListItemScreen;
