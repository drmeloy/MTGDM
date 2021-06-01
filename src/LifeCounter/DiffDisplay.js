import React, { useRef, useEffect, useCallback } from 'react';
import { Text, Animated } from 'react-native';
import { styles } from './styles';
import { styler } from '../utils';
import _ from 'lodash';

export default function DiffDisplay({ diff, setDiff }){
  const diffOpacity = useRef(new Animated.Value(0)).current;
  const initialLoadDone = useRef(false);

  useEffect(() => {
    if (initialLoadDone.current) {
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
      });
    }
    else initialLoadDone.current = true;
  }, [diff]);

  const resetDiffDebounced = useCallback(_.debounce(() => setDiff(0), 2000), []);

  useEffect(() => {
    resetDiffDebounced();
  }, [diff]);

  return (
    <Animated.View style={[styler(styles, {}, 'diff'), { opacity: diffOpacity }]}>
        <Text>{diff}</Text>
    </Animated.View>
  );
};
