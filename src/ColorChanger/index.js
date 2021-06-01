import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import ChangerModal from './ChangerModal';

export default function ColorChanger(){
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View>
      <ChangerModal isVisible={menuOpen} />
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