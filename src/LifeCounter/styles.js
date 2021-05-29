import { StyleSheet } from 'react-native';

export const styles = props => StyleSheet.create({
  container: {
    backgroundColor: props.bgColor,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: props.fontSize,
    margin: 20,
  },
});
