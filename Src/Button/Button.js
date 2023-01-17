import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './ButtonStyle';

const Button = ({title, onPress, theme = 'primary'}) => {
  //themenin default değerini primary olarak belirledik
  return (
    <TouchableOpacity
      testID="button-touchable"
      onPress={onPress}
      style={styles[theme].container}>
      <Text testID="button-title" style={styles[theme].title}>
        Testing Style
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
