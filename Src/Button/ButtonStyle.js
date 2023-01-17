import {StyleSheet} from 'react-native';

export const styles = {
  primary: StyleSheet.create({
    container: {
      backgroundColor: 'lightblue',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      padding: 20,
      borderRadius: 50,
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  }),
  secondary: StyleSheet.create({
    container: {
      borderColor: 'lightblue',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      padding: 20,
      borderRadius: 50,
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  }),
};
