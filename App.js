import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LifeCounter from './src/LifeCounter';

export default function App() {
  return (
    <View style={styles.container}>
      <LifeCounter boxNum={1} />
      <LifeCounter boxNum={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
