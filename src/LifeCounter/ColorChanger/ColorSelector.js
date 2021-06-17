import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import { useColors } from '../../contexts/colors-context';

export default function ColorSelector({ color }){
  const { colors, setColors, toggleColors } = useColors();
  const images = {
    blue: require('../../../public/assets/mana/blue_mana.png'),
    white: require('../../../public/assets/mana/white_mana.png'),
    red: require('../../../public/assets/mana/red_mana.png'),
    green: require('../../../public/assets/mana/green_mana.png'),
    black: require('../../../public/assets/mana/black_mana.png'),
  }
  
  return (
    <Pressable
      onPress={() => toggleColors(color, colors)}
      onLongPress={() => setColors([color])}
      >
      <Image
          style={styles.colorSelector}
          source={images[color]} />
    </Pressable>
  )
};

const styles = StyleSheet.create({
  colorSelector: {
    width: 25,
    height: 25,
    margin: 10
  }
});
