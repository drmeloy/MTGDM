import React from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';
import { useTurnCounter } from '../../../../contexts';

export const ToggleTurnCounterButton = () => {
  const { toggleTurnCounter } = useTurnCounter();
  return (
    <View>
      <Pressable onPress={toggleTurnCounter}>
        <Image 
          style={styles.button}
          source={require('../../../../../public/assets/toggle_turn_counter.svg')}
        />
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  button: {
    height: 25,
    width: 25,
    opacity: '0.7'
  }
});
