/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';

import Router from './Router';
import ColorScreen from './src/screens/ColorScreen';
const App = () => {
  console.disableYellowBox = true;
  return (
    <SafeAreaView style={{flex: 1}}>
      <Router />
    </SafeAreaView>
  );
};
export default App;
