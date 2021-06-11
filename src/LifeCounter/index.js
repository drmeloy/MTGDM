import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HpDisplay from './HpDisplay/HpDisplay';
import ChangerButton from './ColorChanger/ChangerButton';
import ChangerModal from './ColorChanger/ChangerModal'
import Background from './ColorChanger/Background';

export default function LifeCounter({ boxNum }){
  const [bgColors, setBgColors] = useState(['white']);
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <View style={[styles.container, styles[`box${boxNum}`]]}>
      <Background colors={bgColors}/>
      <ChangerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <ChangerModal isVisible={menuOpen} bgColors={bgColors} setBgColors={setBgColors} />
      <HpDisplay />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: 'black',
    borderTopWidth: '1px'
  },
  box1: {
    transform: [{
      rotate: '180deg'
    }]
  },
});
