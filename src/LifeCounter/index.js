import React, { useState } from 'react';
import { View } from 'react-native';
import HpDisplay from './HpDisplay';
import ColorChanger from '../ColorChanger';
import { styler } from '../utils';
import { styles } from './styles';

export default function LifeCounter({ boxNum }){
  const [bgColor, setBgColor] = useState('white');
  
  return (
    <View style={[styler(styles, { bgColor }, 'container'), styler(styles, {}, `box${boxNum}`)]}>
      <ColorChanger />
      <HpDisplay />
    </View>
  )
}