import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { styler } from '../../utils';
import ColorSelector from './ColorSelector';

export default function ChangerModal({ isVisible, setBgColor }){
  return (
    <View style={[styler(styles, {}, 'changerModal'), { display: isVisible ? '' : 'none' }]}>
      <ColorSelector color={'blue'} setBgColor={setBgColor} />
      <ColorSelector color={'red'} setBgColor={setBgColor} />
      <ColorSelector color={'white'} setBgColor={setBgColor} />
      <ColorSelector color={'black'} setBgColor={setBgColor} />
      <ColorSelector color={'green'} setBgColor={setBgColor} />
    </View>
  )
};
