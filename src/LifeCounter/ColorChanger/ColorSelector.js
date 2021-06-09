import React from 'react';
import { Pressable, Image } from 'react-native';
import { styles } from './styles';
import { styler } from '../../utils';

export default function ColorSelector({ color, bgColors, setBgColors }){
  const colors = bgColors.slice();
  
  return (
    <Pressable
        onPress={() => {
          if (colors.includes(color)) {
            colors.splice(colors.indexOf(color), 1)
            setBgColors(colors);
          }
          else (setBgColors([...colors, color]));
        }}>
        <Image
            style={styler(styles, {}, 'colorSelector')}
            source={require(`../../../public/assets/mana/${color}_mana.png`)} />
    </Pressable>
  )
};
