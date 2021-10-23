import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ColorSelector } from './elements';

export function ChangerModal({ isVisible }){
  return (
    <View style={[styles.changerModal, { display: isVisible ? '' : 'none' }]}>
      <ColorSelector color={'blue'} />
      <ColorSelector color={'red'} />
      <ColorSelector color={'white'} />
      <ColorSelector color={'black'} />
      <ColorSelector color={'green'} />
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
