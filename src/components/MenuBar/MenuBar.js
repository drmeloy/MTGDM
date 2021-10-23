import React, { useRef, useEffect } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { Menu, MenuToggleButton } from './elements/';
import { useMenu } from '../../contexts';

export function MenuBar(){
  const {menuOpen} = useMenu();
  const menuHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (menuOpen) {
      Animated.timing(menuHeight, {
        toValue: 45,
        duration: 100,
        useNativeDriver: true
      }).start();
    }
    if (!menuOpen) {
      Animated.timing(menuHeight, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true
      }).start();
    };
  }, [menuOpen]);

  return (
    <Animated.View style={[
      styles.menu,
      menuOpen && styles.menuOpen,
      { height: menuHeight }
    ]}>
      {!menuOpen && <MenuToggleButton />}
      {menuOpen && <Menu />}
    </Animated.View>
  )
};

const styles = StyleSheet.create({
  menu: {
    zIndex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(40, 40, 40)',
  },
  menuOpen: {
    borderWidth: 3,
  }
});
