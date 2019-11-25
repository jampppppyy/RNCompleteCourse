import React from 'react';
import { View, Text } from 'react-native';

const Card = ({ children }) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shawdowOpacity: 0.1,
    shawdowRadius: 2,
    elevation: 1,
    marginHorizontal: 50,
    marginTop: 10,
  },
};
export { Card };
