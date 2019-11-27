import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const TextInputScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text style={style.title}> TEXT INPUT SCREEN </Text>
      <Text>Enter Password:</Text>
      <TextInput
        style={style.textInput}
        onChangeText={text => setName(text)}
        value={name}
        secureTextEntrya
      />
      {name.length < 5 && name.length > 1 ? renderPasswordValidation() : null}
      {/* <Text>Your name is {name}</Text> */}
    </View>
  );
};

const renderPasswordValidation = () => (
  <Text>Password must be longer than 5 characters</Text>
);

const style = StyleSheet.create({
  title: {
    textAlign: 'center',
    padding: 20,
  },
  textInput: {
    margin: 20,
    padding: 10,
    borderWidth: 1,
  },
});
export default TextInputScreen;
