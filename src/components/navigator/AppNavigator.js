import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

import TodoListScreen from '../screens/ToDoList';
import TodoListItemScreen from '../screens/ToDoListItem';
import Flexbox from '../screens/FlexBox';
import Inscription from '../screens/Inscription';

const TabNavigation = () => {
    return (
      <Tab.Navigator    tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
        <Tab.Screen name="ToDoList" component={TodoListScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-list" color={color} size={size} />
          ),
        }}></Tab.Screen>
          <Tab.Screen name="Inscription" component={Inscription} options={{
          tabBarLabel: 'Inscription',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-plus" color={color} size={size} />
          ),
        }}></Tab.Screen>
          <Tab.Screen name="FlexBox" component={Flexbox} options={{
          tabBarLabel: 'FlexBox',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="microsoft-windows" color={color} size={size} />
          ),
        }}></Tab.Screen>
      </Tab.Navigator>
    );
};
export default TabNavigation;