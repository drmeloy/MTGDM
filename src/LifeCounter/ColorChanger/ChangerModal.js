import React from 'react';
import { View, StyleSheet } from 'react-native';
import ColorSelector from './ColorSelector';

export default function ChangerModal({ isVisible, bgColors, setBgColors }){
  return (
    <View style={[styles.changerModal, { display: isVisible ? '' : 'none' }]}>
      <ColorSelector color={'blue'} bgColors={bgColors} setBgColors={setBgColors} />
      <ColorSelector color={'red'} bgColors={bgColors} setBgColors={setBgColors} />
      <ColorSelector color={'white'} bgColors={bgColors} setBgColors={setBgColors} />
      <ColorSelector color={'black'} bgColors={bgColors} setBgColors={setBgColors} />
      <ColorSelector color={'green'} bgColors={bgColors} setBgColors={setBgColors} />
    </View>
  )
};

const styles = StyleSheet.create({
  changerModal: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
    flexDirection: 'row',
  }
});
