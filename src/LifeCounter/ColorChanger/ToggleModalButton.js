import React from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';

export default function ToggleModalButton({ modalOpen, setModalOpen}){
  return (
    <View style={styles.toggleModalButton}>
      <Pressable
        onPress={() => setModalOpen(!modalOpen)}
      >
        <Image
          style={styles.button}
          source={require('../../../public/assets/mana/green_mana.png')} />
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
    width: 25,
    height: 25
  }
});
