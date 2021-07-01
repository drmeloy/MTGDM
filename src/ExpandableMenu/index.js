import React, { useState, useRef, useEffect } from 'react';
import { View, Pressable, Image, StyleSheet, Animated, Modal } from 'react-native';

export default function ExpandableMenu({ menuIcon, menuItems}){
  const [isOpen, setIsOpen] = useState(false);
  const containerHeight = useRef(new Animated.Value(0)).current;
  const openedHeight = menuItems.length * 30 + menuItems.length * 10;

  const buttons = menuItems.map((button, i) => (
    <Pressable
      onPress={button.onPress}
      key={i}>
      <Image
        source={button.image}
        style={isOpen && styles.button} />
    </Pressable>
  ))

  useEffect(() => {
    if (isOpen) {
      Animated.timing(containerHeight, {
        toValue: openedHeight,
        duration: 300,
        useNativeDriver: true
      }).start();
    };
    if (!isOpen) {
      Animated.timing(containerHeight, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true
      }).start();
    };
  }, [containerHeight]);

  return (
    <View style={styles.container}>
      <View>
        <Pressable
          onPress={() => setIsOpen(!isOpen)}>
          <Image
            source={menuIcon} 
            style={styles.button} />
        </Pressable>
      </View>
      <View style={[{height: containerHeight}, styles.modal]}>
        {buttons}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'rgb(40, 40, 40)',
  },
  button: {
    height: 30,
    width: 30,
    alignSelf: 'center'
  },
  modal: {
    justifyContent: 'space-evenly',
    position: 'absolute',
    top: 36,
    left: -5,
    paddingHorizontal: 5,
    backgroundColor: 'rgb(40, 40, 40)',
    borderWidth: 1,
    borderColor: 'black'
  }
});
