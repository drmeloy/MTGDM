import React from 'react';
import { Pressable, Image } from 'react-native';
import { styles } from './styles';
import { styler } from '../../utils';

export default function ColorSelector({ color, setBgColor }){
  return (
    <Pressable
        onPress={() => setBgColor(color)}>
        <Image
            style={styler(styles, {}, 'colorSelector')}
            source={require(`../../../public/assets/mana/${color}_mana.png`)} />
    </Pressable>
  )
};
