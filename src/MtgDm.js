import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MenuBar, LifeCounter } from './components';
import { MenuProvider } from './contexts';

export function MtgDm() {
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
  }
});
