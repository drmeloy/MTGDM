import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import { useMenu } from '../contexts/menu-context';

export default function MenuToggleButton(){
  const { toggleMenu } = useMenu();

  return (
    <Pressable
      onPress={() => toggleMenu()}
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
