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
    margin: 20,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 3
  },
  diffDisplay: {
    alignItems: 'center',
  },
  diffText: {
    fontSize: 16,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 3
  }
});