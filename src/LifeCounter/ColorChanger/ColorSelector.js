import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';

export default function ColorSelector({ color, bgColors, setBgColors }){
  const colors = bgColors.slice();
  const images = {
    blue: require('../../../public/assets/mana/blue_mana.png'),
    white: require('../../../public/assets/mana/white_mana.png'),
    red: require('../../../public/assets/mana/red_mana.png'),
    green: require('../../../public/assets/mana/green_mana.png'),
    black: require('../../../public/assets/mana/black_mana.png'),
  }
  
  return (
    <Pressable
      onPress={() => {
        if (colors.includes(color)) {
          if (colors.length === 1) return;
          colors.splice(colors.indexOf(color), 1)
          setBgColors(colors);
        }
        else (setBgColors([...colors, color]));
      }}
      onLongPress={() => setBgColors([color])}
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
