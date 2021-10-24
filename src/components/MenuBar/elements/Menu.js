import React, { useRef, useEffect } from 'react';
import { Image, StyleSheet, Animated } from 'react-native';
import { useMenu, useTurnCounter } from '../../../contexts';
import { MenuToggleButton } from './MenuToggleButton';
import { ToggleTurnCounterButton, ResetButton } from './MenuButtons';

export function Menu(){
  const { menuOpen } = useMenu();
  const menuOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (menuOpen) {
      Animated.timing(menuOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start();
    };
    if (!menuOpen) {
      Animated.timing(menuOpacity, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true
      }).start();
    };
  }, [menuOpen]);
  
  return (
    <Animated.View style={[styles.container, { opacity: menuOpacity }]}>
      <ToggleTurnCounterButton />
      <Image
        source={require('../../../../public/assets/mana/red_mana.png')} 
        style={styles.button} />
      <MenuToggleButton />
      <Image
        source={require('../../../../public/assets/mana/green_mana.png')} 
        style={styles.button} />
      <ResetButton />
    </Animated.View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  button: {
    height: 30,
    width: 30
  }
});
