import { StyleSheet, Animated } from 'react-native';

export const styles = props => StyleSheet.create({
  container: {
    backgroundColor: props.bgColor,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hp: {
    flexDirection: 'row',
  },
  font: {
    fontSize: props.fontSize,
    margin: 20,
  },
  diff: {
    opacity: props.diffOpacity,
  }
});
