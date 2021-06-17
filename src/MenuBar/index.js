import React from 'react';
import { View, StyleSheet } from 'react-native';
import MenuToggleButton from './MenuToggleButton';
import { useMenu } from '../contexts/menu-context';

export default function MenuBar(){
  const {menuOpen} = useMenu();

  return (
    <View style={[
      menuOpen ? 
      styles.menuOpen : 
      styles.menuClosed,
      { justifyContent: 'center' }
    ]}>
      <MenuToggleButton />  
    </View>
  )
};

const styles = StyleSheet.create({
  menuClosed: {
    height: 0,
    zIndex: 5
  },
  menuOpen: {
    borderColor: 'black',
    borderWidth: '3px',
    zIndex: 5,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  }
});
