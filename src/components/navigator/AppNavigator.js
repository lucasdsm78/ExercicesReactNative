import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import TodoListScreen from '../screens/ToDoList';
import TodoListItemScreen from '../screens/ToDoListItem';

const Navigation = () => {
    return (
      <Stack.Navigator initialRouteName="ToDoList">
        <Stack.Screen name="ToDoList" component={TodoListScreen}
         ></Stack.Screen>
        <Stack.Screen title={({params}) => params.title} name="ToDoListItem" options={({ route }) => ({ title: route.params.title })} component={TodoListItemScreen}></Stack.Screen>
      </Stack.Navigator>
    );
  };
export default Navigation;