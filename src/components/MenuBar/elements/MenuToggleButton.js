import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import { useMenu } from '../../../contexts';

export function MenuToggleButton(){
  const { toggleMenu } = useMenu();

  return (
    <Pressable
      onPress={() => toggleMenu()}
    >
      <Image
        source={require('../../../../public/assets/logos/mtg_logo_gold.png')}
        style={[styles.openButton]}
        />
    </Pressable>
  )
};

const styles = StyleSheet.create({
  openButton: {
    height: 35,
    width: 35,
    alignSelf: 'center'
  }
});
