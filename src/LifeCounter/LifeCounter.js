import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from './styles';

export default function LifeCounter(){
  const [hp, setHp] = useState(40);
  const [diff, setDiff] = useState(0);
  const [bgColor, setBgColor] = useState('red');

  const diffResetMs = 3000;
  const resetDiff = ms => setTimeout(() => setDiff(0), ms);

  const raiseHp = () => {
    setHp(hp + 1);
    setDiff(diff + 1);
    resetDiff(diffResetMs);
  }

  const lowerHp = () => {
    setHp(hp - 1);
    setDiff(diff - 1);
    resetDiff(diffResetMs);
  }

  return (
    <View style={styles({ bgColor }).container}>
      <View>
        <Text>{diff}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Pressable
          onPress={lowerHp}
        >
          <Text style={styles({ fontSize: 32 }).font}>
            -
          </Text>
        </Pressable>
        <Text style={styles({ fontSize: 48 }).font}>
          {hp}
        </Text>
        <Pressable
          onPress={raiseHp}
        >
          <Text style={styles({ fontSize: 32 }).font}>
            +
          </Text>
        </Pressable>
      </View>
    </View>
  )
}