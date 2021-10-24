import React from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';
import { useTurnCounter, useHp } from '../../../../contexts';

export const ResetButton = () => {
  const { resetTurnCounter } = useTurnCounter();
  const { resetHp } = useHp();
  const reset = () => {
    resetTurnCounter();
    resetHp();
  }
  
  return (
    <View>
      <Pressable onPress={reset}>
        <Image 
          style={styles.button}
          source={require('../../../../../public/assets/reset.png')}
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
