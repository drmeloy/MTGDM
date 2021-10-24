import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MenuBar, LifeCounter } from './components';
import { MenuProvider, TurnProvider, HpProvider } from './contexts';

export function MtgDm() {
  return (
    <TurnProvider>
      <MenuProvider>
        <HpProvider>
          <View style={styles.container}>
            <LifeCounter boxNum={2} />
            <MenuBar />
            <LifeCounter boxNum={1} />
          </View>
        </HpProvider>
      </MenuProvider>
    </TurnProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
