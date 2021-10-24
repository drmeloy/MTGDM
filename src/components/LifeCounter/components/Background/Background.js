import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useColors, useTurnCounter } from '../../../../contexts';

export function Background({ boxNum }){
  const { colors } = useColors();
  const { activePlayer } = useTurnCounter();

  const images = {
    blue: require('../../../../../public/assets/backgrounds/blue_bg.png'),
    white: require('../../../../../public/assets/backgrounds/white_bg.png'),
    red: require('../../../../../public/assets/backgrounds/red_bg.png'),
    black: require('../../../../../public/assets/backgrounds/black_bg.png'),
    green: require('../../../../../public/assets/backgrounds/green_bg.png'),
  }

  const backgrounds = colors.map((color, i) => 
    <Image
      source={images[color]}
      style={styles.image}
      key={i}
    />
  );

  return (
    <View style={[styles.view, activePlayer !== boxNum && styles.inactive]}>
      {boxNum}{backgrounds}{activePlayer}
    </View>
  )
};

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
    flexDirection: 'row'
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  inactive: {
    filter: 'brightness(45%)'
  }
});
