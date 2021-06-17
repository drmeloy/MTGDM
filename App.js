import React from 'react';
import { StyleSheet, View } from 'react-native';
import LifeCounter from './src/LifeCounter';
import MenuBar from './src/MenuBar';
import { MenuProvider } from './src/contexts/menu-context';

export default function App() {
  return (
    <MenuProvider>
      <View style={styles.container}>
        <LifeCounter boxNum={1} />
        <MenuBar />
        <LifeCounter boxNum={2} />
      </View>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
