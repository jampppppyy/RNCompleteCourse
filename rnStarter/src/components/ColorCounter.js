import React from 'react';
import {View, Text, Button} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
  return (
    <View>
      <Text style={{paddingLeft: 50}}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={e => onIncrease()} />
      <Button title={`Decrease ${color}`} onPress={e => onDecrease()} />
    </View>
  );
};

export default ColorCounter;
1;

;