import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import { styler } from '../../utils';

export default function ChangerModal({ isVisible, setIsVisible }){
  return (
    <View style={[styler(styles, {}, 'changerModal'), { display: isVisible ? '' : 'none' }]}>
      <Text>
        Change colors bitch!
      </Text>
      <Pressable onPress={() => setIsVisible(false)}>
        <Text>CLOSE MODAL</Text>
      </Pressable>
    </View>
  )
};
