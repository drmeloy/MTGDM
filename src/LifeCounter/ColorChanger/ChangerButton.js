import React from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';

export default function ChangerButton({ menuOpen, setMenuOpen}){
  return (
    <View style={styles.changerButton}>
      <View>
        <Pressable
          onPress={() => setMenuOpen(!menuOpen)}
        >
          <Image
            style={{width: 25, height: 25}}
            source={require('../../../public/assets/mana/green_mana.png')} />
        </Pressable>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  changerButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  }
});
