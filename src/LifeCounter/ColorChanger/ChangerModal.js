import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { styler } from '../../utils';
import ColorSelector from './ColorSelector';

export default function ChangerModal({ isVisible, bgColors, setBgColors }){
  return (
    <View style={[styler(styles, {}, 'changerModal'), { display: isVisible ? '' : 'none' }]}>
      <ColorSelector color={'blue'} bgColors={bgColors} setBgColors={setBgColors} />
      <ColorSelector color={'red'} bgColors={bgColors} setBgColors={setBgColors} />
      <ColorSelector color={'white'} bgColors={bgColors} setBgColors={setBgColors} />
      <ColorSelector color={'black'} bgColors={bgColors} setBgColors={setBgColors} />
      <ColorSelector color={'green'} bgColors={bgColors} setBgColors={setBgColors} />
    </View>
  )
};
