import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Text, View, Pressable, Animated } from 'react-native';
import { styles } from './styles';
import _ from 'lodash';

export default function LifeCounter(){
  const [hp, setHp] = useState(40);
  const [diff, setDiff] = useState(0);
  const [bgColor, setBgColor] = useState('white');
  const diffOpacity = useRef(new Animated.Value(0)).current;

  const stylesParams = {
    bgColor,
    fontSize: 32,
    diffOpacity,
  }

  useEffect(() => {
    console.log(diffOpacity);
  }, [diffOpacity])

  useEffect(() => {
    if (diff !== 0) {
      Animated.timing(diffOpacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true
      }).start();
    }
    if (diff === 0) {
      Animated.timing(diffOpacity, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true
      }).start();
    }
  }, [diff, diffOpacity])

  const styler = toBeStyled => styles(stylesParams)[toBeStyled];

  const resetDiff = useCallback(_.debounce(() => setDiff(0), 2000), []);

  const raiseHp = () => {
    setHp(hp + 1);
    setDiff(diff + 1);
    resetDiff();
  }

  const lowerHp = () => {
    setHp(hp - 1);
    setDiff(diff - 1);
    resetDiff();
  }

  return (
    <View style={styler('container')}>
      <Animated.View style={styler('diff')}>
        <Text>{diff}</Text>
      </Animated.View>
      <View style={styler('hp')}>
        <Pressable
          onPress={lowerHp}
        >
          <Text style={styler('font')}>
            -
          </Text>
        </Pressable>
        <Text style={styler('font')}>
          {hp}
        </Text>
        <Pressable
          onPress={raiseHp}
        >
          <Text style={styler('font')}>
            +
          </Text>
        </Pressable>
      </View>
    </View>
  )
}