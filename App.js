import React from 'react';
import { StyleSheet, View } from 'react-native';
import LifeCounter from './src/LifeCounter';
import MenuBar from './src/MenuBar';

export default function App() {
  return (
    <View style={styles.container}>
      <LifeCounter boxNum={1} />
      <MenuBar />
      <LifeCounter boxNum={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
