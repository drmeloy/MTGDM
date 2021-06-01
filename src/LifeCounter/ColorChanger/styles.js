import { StyleSheet } from 'react-native';

export const styles = props => StyleSheet.create({
  changerButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  changerModal: {
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
    position: 'absolute',
    alignSelf: 'center'
  }
});
