import React from 'react';
import {View, TextInput, Text} from 'react-native';

const Input = ({
  style,
  onChangeText,
  value,
  placeholder,
  label,
  secureTextEntry,
}) => {
  const {labelStyle, container, labelContainer, placeholderContainer} = styles;
  return (
    <View style={container}>
      <View style={labelContainer}>
        <Text style={labelStyle}>{label}</Text>
      </View>
      <View style={placeholderContainer}>
        <TextInput
          secureTextEntry={secureTextEntry}
          style={{height: 40, width: '100%'} || style}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

const styles = {
  labelStyle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#007aff',
    lineHeight: 25,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  labelContainer: {
    flex: 1,
  },
  placeholderContainer: {
    marginLeft: 10,
    flex: 2,
  },
};

export {Input};
