import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useTurnCounter } from '../../../../contexts';

export const TurnCounter = () => {
  const { turn } = useTurnCounter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Turn: {turn}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 7
  }
});
