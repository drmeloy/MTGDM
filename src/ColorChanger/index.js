import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
// const icon = require('../../public/assets/black_mana.png');

export default function ColorChanger(){
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View>
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