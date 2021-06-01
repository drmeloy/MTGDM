import { StyleSheet } from 'react-native';

export const styles = props => StyleSheet.create({
  container: {
    backgroundColor: props.bgColor,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    transform: [{
      rotate: '180deg'
    }]
  },
  hpDisplay: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hp: {
    flexDirection: 'row',
  },
  font: {
    fontSize: 32,
    margin: 20,
  },
  diff: {
    alignItems: 'center',
  },
});
