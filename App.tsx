import {NavigationContainer} from "@react-navigation/native";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from "./src/navigation/AppNavigation";
import {AudioProvider} from './src/context/AudioProvider'
import AudioListItem from "./src/components/AudioListItem";
export default function App() {
  return (
      <AudioProvider>
          <NavigationContainer>
              <AppNavigator/>
          </NavigationContainer>
      </AudioProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
