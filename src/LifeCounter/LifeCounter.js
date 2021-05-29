import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function LifeCounter(){
  const [hp, setHp] = useState(40);
  const [bgColor, setBgColor] = useState('red');

  return (
    <View style={styles({ bgColor }).container}>
      <Text>{hp}</Text>
    </View>
  )
}