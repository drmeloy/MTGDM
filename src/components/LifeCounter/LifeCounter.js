import React, { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Background, ChangerModal, HpDisplay, TopRow } from './components';
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
        <Background boxNum={boxNum} />
        <TopRow modalOpen={modalOpen} setModalOpen={setModalOpen} boxNum={boxNum} />
        <HpDisplay boxNum={boxNum} />
        <ChangerModal isVisible={modalOpen} />
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
    borderTopWidth: '1px',
  },
  box2: {
    transform: [{
      rotate: '180deg'
    }]
  }
});
