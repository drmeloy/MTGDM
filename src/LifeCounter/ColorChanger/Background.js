import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Background({ colors }){
  console.log(colors);
  const backgrounds = colors.map(color => 
    <Image
      source={require(`../../../public/assets/backgrounds/${color}_bg.png`)}
      style={styles.bg}
    />
  );

  return (
    <View style={stylez}>
      {backgrounds}
    </View>
  )
}

const stylez = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 0,
  flexDirection: 'row'
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  }
})