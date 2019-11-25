import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';

const Button = ({ onPress, children }) => {
  const { button, text } = styles;
  return (
    <TouchableOpacity style={button} onPress={onPress}>
      <Text style={text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 10,
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
};
export { Button };
