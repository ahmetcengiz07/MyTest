/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import Button from './Src/Button';

const App = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState('');

  const renderList = ({item}) => {
    return (
      <View
        style={[
          styles.input,
          {
            backgroundColor: 'lightgreen',
            marginHorizontal: 60,
          },
        ]}>
        <Text> {item} </Text>
      </View>
    );
  };
  const HandleClick = () => {
    if (!text) {
      return;
    }

    setList([...list, text]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Test with Jest</Text>
      <FlatList
        testID="list"
        data={list}
        renderItem={renderList}
        keyExtractor={(_item, index) => index.toString()}
      />
      <TextInput
        onChangeText={setText}
        testID="Input-Area"
        placeholder="Add "
        style={styles.input}
      />
      <Button onPress={HandleClick} title="Add List" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  input: {
    backgroundColor: 'lightgray',
    margin: 10,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
    padding: 12,
    marginHorizontal: 20,
  },
});

export default App;
