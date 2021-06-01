import React from 'react';
import { View, Pressable, Image } from 'react-native';
import { styles } from './styles';
import { styler } from '../../utils';

export default function ChangerButton({ menuOpen, setMenuOpen}){
  return (
    <View style={styler(styles, {}, 'changerButton')}>
      <View>
        <Pressable
          onPress={() => setMenuOpen(!menuOpen)}
        >
          <Image
            style={{width: 25, height: 25}}
            source={require('../../../public/assets/green_mana.png')} />
        </Pressable>
      </View>
    </View>
  )
}