import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ToggleModalButton, TurnCounter, PassTurnButton  } from '..';
import { useTurnCounter } from '../../../../contexts';

export const TopRow = ({ modalOpen, setModalOpen, boxNum }) => {
  const { turnCounterOn } = useTurnCounter();

  return (
    <View style={styles.container}>
      <ToggleModalButton modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {turnCounterOn ? <TurnCounter /> : <></>}
      {turnCounterOn ? <PassTurnButton boxNum={boxNum} /> : <></>}
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
