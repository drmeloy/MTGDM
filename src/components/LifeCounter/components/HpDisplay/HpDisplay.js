import React, { useState } from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { DiffDisplay } from './elements';
import PlusIcon from '../../../../../public/assets/plus_icon.svg';
import MinusIcon from '../../../../../public/assets/minus_icon.svg';

export function HpDisplay(){
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
    <View styles={styles.hpDisplay}>
      <DiffDisplay diff={diff} setDiff={setDiff} />
      <View style={styles.hp}>
        <Pressable onPress={lowerHp}>
          {/* <MinusIcon /> */}
          <Text style={styles.font}>
            -
          </Text>
        </Pressable>
        <Text style={styles.font}>
          {hp}
        </Text>
        <Pressable onPress={raiseHp}>
          {/* <PlusIcon /> */}
          <Text style={styles.font}>
            +
          </Text>
        </Pressable>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  hpDisplay: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hp: {
    flexDirection: 'row',
  },
  font: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 7
  },
});
