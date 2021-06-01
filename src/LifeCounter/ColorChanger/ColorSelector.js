import React from 'react';
import { Pressable, Image } from 'react-native';

export default function ColorSelector({ color, setBgColor }){
  return (
    <Pressable
        onPress={() => setBgColor(color)}>
        <Image
            style={{width: 25, height: 25}}
            source={require(`../../../public/assets/${color}_mana.png`)} />
    </Pressable>
  )
};
