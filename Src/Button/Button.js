import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './ButtonStyle';

const Button = ({title, onPress, theme}) => {
  return (
    <TouchableOpacity
      testID="button-touchable"
      onPress={onPress}
      style={styles.secondary.container}>
      <Text testID="button-title" style={styles.text}>
        Testing Style
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
