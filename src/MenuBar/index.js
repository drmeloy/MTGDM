import React, { useState } from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';
import OpenButton from './OpenButton';

export default function MenuBar(){
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={[
      menuOpen ? 
      styles.menuOpen : 
      styles.menuClosed,
      { justifyContent: 'center' }
    ]}>
      <OpenButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />  
    </View>
  )
};

const styles = StyleSheet.create({
  menuClosed: {
    // position: 'absolute',
    // top: '48%',
    // left: 0,
    // right: 0,
    height: 0,
    zIndex: 5
  },
  menuOpen: {
    // position: 'absolute',
    // top: '48%',
    // left: 0,
    // right: 0,
    borderColor: 'black',
    borderWidth: '3px',
    zIndex: 5,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  }
});
