import React, { useState } from 'react';
import { View, Image } from 'react-native';
import HpDisplay from './HpDisplay/HpDisplay';
import ChangerButton from './ColorChanger/ChangerButton';
import ChangerModal from './ColorChanger/ChangerModal'
import Background from './ColorChanger/Background';
import { styler } from '../utils';
import { styles } from './styles';

export default function LifeCounter({ boxNum }){
  const [bgColors, setBgColors] = useState(['blue']);
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <View style={[styler(styles, {}, 'container'), styler(styles, {}, `box${boxNum}`)]}>
      <Background colors={bgColors}/>
      <ChangerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <ChangerModal isVisible={menuOpen} bgColors={bgColors} setBgColors={setBgColors} />
      <HpDisplay />
    </View>
  )
}


