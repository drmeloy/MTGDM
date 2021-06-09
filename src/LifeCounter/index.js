import React, { useState } from 'react';
import { View, Image } from 'react-native';
import HpDisplay from './HpDisplay/HpDisplay';
import ChangerButton from './ColorChanger/ChangerButton';
import ChangerModal from './ColorChanger/ChangerModal'
import Background from './ColorChanger/Background';
import { styler } from '../utils';
import { styles } from './styles';

export default function LifeCounter({ boxNum }){
  const [bgColor, setBgColor] = useState(['blue', 'white','green', 'red', 'black']);
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <View style={[styler(styles, {}, 'container'), styler(styles, {}, `box${boxNum}`)]}>
      <Background colors={bgColor}/>
      <ChangerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <ChangerModal isVisible={menuOpen} setBgColor={setBgColor} />
      <HpDisplay />
    </View>
  )
}


