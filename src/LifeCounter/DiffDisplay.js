import React, { useRef, useEffect, useCallback } from 'react';
import { Text, Animated } from 'react-native';
import { styles } from './styles';
import { styler } from '../utils';
import _ from 'lodash';

export default function DiffDisplay({ diff, setDiff }){
  const diffOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (diff !== 0)
    Animated.timing(diffOpacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true
    }).start(() => {
      Animated.timing(diffOpacity, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true
      }).start();
    })
  }, [diff]);

  const resetDiffDebounced = useCallback(_.debounce(() => setDiff(0), 3000), []);

  useEffect(() => {
    resetDiffDebounced();
  }, [diff]);

  return (
    <Animated.View style={styler(styles, { diffOpacity },'diff')}>
        <Text>{diff}</Text>
    </Animated.View>
  );
};
