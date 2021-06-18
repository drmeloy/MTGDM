import React from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import { useMenu } from '../contexts/menu-context';
import MenuToggleButton from './MenuToggleButton';

export default function Menu(){
 return (
    <>
      <Image
        source={require('../../public/assets/mana/blue_mana.png')} 
        style={styles.button} />
      <Image
        source={require('../../public/assets/mana/red_mana.png')} 
        style={styles.button} />
      <MenuToggleButton />
      <Image
        source={require('../../public/assets/mana/green_mana.png')} 
        style={styles.button} />
      <Image
        source={require('../../public/assets/mana/black_mana.png')} 
        style={styles.button} />
    </>
  )
};

const styles = StyleSheet.create({
  button: {
    height: 30,
    width: 30
  }
});
