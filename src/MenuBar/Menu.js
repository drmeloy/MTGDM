import React from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';

export default function Menu({ menuOpen }){

  if (!menuOpen) return (

  )

  else if (menuOpen) return (

  )
};

const styles = StyleSheet.create({

});
