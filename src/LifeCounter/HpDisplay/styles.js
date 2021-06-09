import { StyleSheet } from 'react-native';

export const styles = props => StyleSheet.create({
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