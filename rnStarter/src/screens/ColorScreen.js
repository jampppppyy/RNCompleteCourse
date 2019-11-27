import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log('colors: ', colors);

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        data={colors}
        keyExtractor={item => item}
        renderItem={({ item, index }) => {
          console.log('item: ', item);
          return (
            <View style={{ height: 50, width: 50, backgroundColor: item }} />
          );
        }}
        extraData={colors}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  return `rgb(${red},${blue},${green})`;
};

export default ColorScreen;
