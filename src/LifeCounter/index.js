import React, { useState, useCallback } from 'react';
import { View, Animated } from 'react-native';
import HpDisplay from './HpDisplay';
import { styler } from '../utils';
import { styles } from './styles';

export default function LifeCounter({ boxNum }){
  const [bgColor, setBgColor] = useState('white');
  const stylesParams = {
    bgColor,
  }
  const boxNumber = `box${boxNum}`;

  return (
    <View style={[styler(styles, stylesParams, 'container'), styler(styles, {}, boxNumber)]}>
      <HpDisplay />
    </View>
  )
}