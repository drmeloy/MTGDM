import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MenuBar, LifeCounter } from './components';
import { MenuProvider, TurnProvider } from './contexts';

export function MtgDm() {
  return (
    <TurnProvider>
      <MenuProvider>
        <View style={styles.container}>
          <LifeCounter boxNum={2} />
          <MenuBar />
          <LifeCounter boxNum={1} />
        </View>
      </MenuProvider>
    </TurnProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
