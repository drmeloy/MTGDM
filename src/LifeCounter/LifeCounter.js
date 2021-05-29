import React, { useState, useCallback } from 'react';
import { View, Animated } from 'react-native';
import HpDisplay from './HpDisplay';
import { styler } from '../utils';
import { styles } from './styles';

export default function LifeCounter(){
  const [bgColor, setBgColor] = useState('white');
  const stylesParams = {
    bgColor,
  }

  return (
    <View style={styler(styles, stylesParams, 'container')}>
      <HpDisplay />
    </View>
  )
}