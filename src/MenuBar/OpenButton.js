import React from 'react';
import { Pressable, Image, View, StyleSheet } from 'react-native';

export default function OpenButton({ menuOpen, setMenuOpen }){

  return (
    <Pressable
      onPress={() => setMenuOpen(!menuOpen)}
    >
      <Image
        source={require('../../public/assets/logos/mtg_logo_gold.png')}
        style={[styles.openButton]}
        />
    </Pressable>
  )
};

const styles = StyleSheet.create({
  openButton: {
    height: 30,
    width: 30,
    alignSelf: 'center'
  }
});
