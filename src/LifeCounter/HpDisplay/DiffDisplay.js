import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Text, Animated, StyleSheet } from 'react-native';
import _ from 'lodash';

export default function DiffDisplay({ diff, setDiff }){
  const [isResetting, setIsResetting] = useState(false);
  const diffOpacity = useRef(new Animated.Value(0)).current;
  const initialLoadDone = useRef(false);

  useEffect(() => {
    if (diff === 0 && isResetting) {
      setIsResetting(false);
      return;
    }
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

  const resetDiffDebounced = useCallback(_.debounce(() => {
    setIsResetting(true);
    setDiff(0);
  }, 2000), []);

  useEffect(() => {
    resetDiffDebounced();
  }, [diff]);

  return (
    <Animated.View style={[styles.diffDisplay, { opacity: diffOpacity }]}>
        <Text style={styles.diffText}>{diff}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  diffDisplay: {
    alignItems: 'center',
  },
  diffText: {
    fontSize: 16,
    padding: 20,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 6
  }
});
