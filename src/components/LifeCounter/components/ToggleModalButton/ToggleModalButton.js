import React from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';

export function ToggleModalButton({ modalOpen, setModalOpen}){
  return (
    <View>
      <Pressable
        onPress={() => setModalOpen(!modalOpen)}
      >
        <Image
          style={styles.button}
          source={require('../../../../../public/assets/loader.svg')} />
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  button: {
    width: 25,
    height: 25,
    opacity: '0.7',
  }
});
