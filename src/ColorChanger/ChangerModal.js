import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';

export default function ChangerModal({ isVisible }){

  console.log(isVisible);
  return (
      <Modal
        style={styles.modalView}
        visible={isVisible}
      >
        <Text>
          Change colors bitch!
        </Text>
      </Modal>
  )
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
})
