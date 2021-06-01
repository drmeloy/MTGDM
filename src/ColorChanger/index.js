import React, { useState } from 'react';
import { View, Pressable, Image } from 'react-native';
import { styles } from './styles';
import { styler } from '../utils'
import ChangerModal from './ChangerModal';

export default function ColorChanger(){
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={styler(styles, {}, 'container')}>
      <ChangerModal isVisible={menuOpen} setIsVisible={setMenuOpen} />
      <Pressable
        onPress={() => setMenuOpen(!menuOpen)}
      >
        <Image
          style={{width: 25, height: 25}}
          source={require('../../public/assets/green_mana.png')} />
      </Pressable>
    </View>
  )
}