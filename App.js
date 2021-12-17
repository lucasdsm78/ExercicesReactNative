/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/components/navigator/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation></Navigation>
    </NavigationContainer>
  );
};

export default App;
