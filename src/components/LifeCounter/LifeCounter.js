import React, { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Background, ToggleModalButton, ChangerModal, HpDisplay } from './components';
import { ColorsProvider, useMenu } from '../../contexts';

export function LifeCounter({ boxNum }){
  const [modalOpen, setModalOpen] = useState(false);
  const { menuOpen, toggleMenu } = useMenu();

  const onClickOutside = (modalOpen, menuOpen) => {
    if (modalOpen){
      setModalOpen(false);
    }
    if (menuOpen){
      toggleMenu();
    }
  }

  return (
    <ColorsProvider>
      <Pressable 
        style={[styles.container, styles[`box${boxNum}`]]}
        onPress={() => onClickOutside(modalOpen, menuOpen)}>
        <Background />
        <ToggleModalButton modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        <ChangerModal isVisible={modalOpen} />
        <HpDisplay />
      </Pressable>
    </ColorsProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: 'black',
    borderTopWidth: '1px'
  },
  box1: {
    transform: [{
      rotate: '180deg'
    }]
  },
});
