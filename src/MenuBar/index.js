import React from 'react';
import { View, StyleSheet } from 'react-native';
import MenuToggleButton from './MenuToggleButton';
import Menu from './Menu';
import { useMenu } from '../contexts/menu-context';

export default function MenuBar(){
  const {menuOpen} = useMenu();

  return (
    <View style={[
      styles.menu,
      menuOpen && styles.menuOpen,
      !menuOpen && styles.menuClosed
    ]}>
      {!menuOpen && <MenuToggleButton />}
      {menuOpen && <Menu />}
    </View>
  )
};

const styles = StyleSheet.create({
  menu: {
    zIndex: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgb(40, 40, 40)',
    flexDirection: 'row'
  },
  menuClosed: {
    height: 0,
  },
  menuOpen: {
    height: 45,
    borderColor: 'black',
    borderWidth: 3,
  }
});
