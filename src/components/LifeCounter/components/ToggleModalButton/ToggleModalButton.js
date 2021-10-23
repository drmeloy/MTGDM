import React from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';

export function ToggleModalButton({ modalOpen, setModalOpen}){
  return (
    <View style={styles.toggleModalButton}>
      <Pressable
        onPress={() => setModalOpen(!modalOpen)}
      >
        <Image
          style={styles.button}
          source={require('../../../../../public/assets/5_circles.png')} />
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  toggleModalButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  button: {
    width: 40,
    height: 40
  }
});
