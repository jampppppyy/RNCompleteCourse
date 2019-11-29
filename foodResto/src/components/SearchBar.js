import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Icon} from 'native-base';

const SearchBar = ({value, onChange, onSubmit}) => {
  return (
    <View style={styles.view}>
      <Icon name="search" type="EvilIcons" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        value={value}
        placeholder="Search"
        style={styles.textInput}
        onChangeText={onChange}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 35,
    marginHorizontal: 20,
  },
  textInput: {
    alignSelf: 'stretch',
    flex: 1,
  },
});

export {SearchBar};
