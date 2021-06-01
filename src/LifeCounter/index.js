import React, { useState } from 'react';
import { View } from 'react-native';
import HpDisplay from './HpDisplay/HpDisplay';
import ChangerButton from './ColorChanger/ChangerButton';
import ChangerModal from './ColorChanger/ChangerModal'
import { styler } from '../utils';
import { styles } from './styles';

export default function LifeCounter({ boxNum }){
  const [bgColor, setBgColor] = useState('white');
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <View style={[styler(styles, { bgColor }, 'container'), styler(styles, {}, `box${boxNum}`)]}>
      <ChangerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <ChangerModal isVisible={menuOpen} setBgColor={setBgColor} />
      <HpDisplay />
    </View>
  )
}