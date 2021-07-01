/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

const App=() =>{
 
  return (
    <NavigationContainer>
    <SafeAreaView >
      <StatusBar />
      <Text>Helloworld sdf</Text>
    </SafeAreaView>
    </NavigationContainer>
  );
};


export default App;
