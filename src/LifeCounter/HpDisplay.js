import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import DiffDisplay from './DiffDisplay';
import { styler } from '../utils';
import { styles } from './styles';

export default function HpDisplay(){
  const [hp, setHp] = useState(40);
  const [diff, setDiff] = useState(0);
  const stylesParams = {};
  
  const raiseHp = () => {
    setHp(hp + 1);
    setDiff(diff + 1);
  }

  const lowerHp = () => {
    setHp(hp - 1);
    setDiff(diff - 1);
  }

  return (
    <View styles={styler(styles, stylesParams, 'hpDisplay')}>
      <DiffDisplay diff={diff} setDiff={setDiff} />
      <View style={styler(styles, stylesParams, 'hp')}>
          <Pressable
            onPress={lowerHp}
          >
            <Text style={styler(styles, stylesParams, 'font')}>
              -
            </Text>
          </Pressable>
          <Text style={styler(styles, stylesParams, 'font')}>
            {hp}
          </Text>
          <Pressable
            onPress={raiseHp}
          >
            <Text style={styler(styles, stylesParams, 'font')}>
              +
            </Text>
          </Pressable>
        </View>
      </View>
  )
}