import React from 'react';
import { View, Text, Modal, StyleSheet, Pressable } from 'react-native';

export default function ChangerModal({ isVisible, setIsVisible }){
  return (
    <View styles={styles.centeredView}>
      <Modal
        visible={isVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>
              Change colors bitch!
            </Text>
            <Pressable onPress={() => setIsVisible(false)}>
              <Text>CLOSE MODAL</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
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
