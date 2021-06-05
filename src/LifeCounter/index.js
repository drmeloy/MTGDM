import React, { useState } from 'react';
import { View, Image } from 'react-native';
import HpDisplay from './HpDisplay/HpDisplay';
import ChangerButton from './ColorChanger/ChangerButton';
import ChangerModal from './ColorChanger/ChangerModal'
import { styler } from '../utils';
import { styles } from './styles';

export default function LifeCounter({ boxNum }){
  const [bgColor, setBgColor] = useState('white');
  const [menuOpen, setMenuOpen] = useState(false);

  const imageDict = { 
    green: require('../../public/assets/backgrounds/green_bg.png'),
    white: require('../../public/assets/backgrounds/white_bg.png'),
    blue: require('../../public/assets/backgrounds/blue_bg.png'),
    black: require('../../public/assets/backgrounds/black_bg.png'),
    red: require('../../public/assets/backgrounds/red_bg.png')
  };
  
  return (
    <View style={[styler(styles, {}, 'container'), styler(styles, {}, `box${boxNum}`)]}>
      <Image source={imageDict[bgColor]} style={styler(styles, {}, 'background')} />
      <ChangerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <ChangerModal isVisible={menuOpen} setBgColor={setBgColor} />
      <HpDisplay />
    </View>
  )
}