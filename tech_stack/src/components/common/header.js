import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ title }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {title} </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    // backgroundColor: '#f6e58d',
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    elevation: 5,
    position: 'relative',
    borderBottomColor: '#f2f3f5',
  },
  textStyle: {
    fontSize: 20,
  },
};
export { Header };
