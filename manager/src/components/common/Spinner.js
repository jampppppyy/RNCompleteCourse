import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Spinner = () => {
  return (
    <ActivityIndicator
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      size="large"
    />
  );
};

export { Spinner };
