import React from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';
import { useTurnCounter } from '../../../../contexts';

export const PassTurnButton = ({ boxNum }) => {
  const { incrementTurn, activePlayer } = useTurnCounter();
  const handlePress = () => {
    if (activePlayer === boxNum) incrementTurn()
  }

  return (
    <View styles={styles.container}>
      <Pressable
        onPress={handlePress}
      >
        <Image
          style={styles.button}
          source={require('../../../../../public/assets/log-out.svg')} />
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  button: {
    width: 25,
    height: 25,
    transform: 'rotate(270deg)',
    opacity: '0.7'
  }
});
