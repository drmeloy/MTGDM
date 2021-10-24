import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ToggleModalButton, TurnCounter, PassTurnButton  } from '..';

export const TopRow = ({ modalOpen, setModalOpen, boxNum }) => {
  return (
    <View style={styles.container}>
      <PassTurnButton boxNum={boxNum} />
      <TurnCounter />
      <ToggleModalButton modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '90%',
    position: 'absolute',
    top: 20,
    left: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
