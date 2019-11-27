import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={style.view}>
      <View style={style.childView1}>
        <View style={style.child1} />
        <View style={{flex: 2}} />
        <View style={style.child2} />
      </View>
      <View style={style.childView2}>
        <View style={{flex: 1.5}} />
        <View style={style.child3} />
        <View style={{flex: 1.5}} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    // borderWidth: 3,
    // borderColor: 'black',
    height: 200,
  },
  child1: {
    backgroundColor: 'orange',
    flex: 1,
  },
  child2: {
    backgroundColor: 'violet',
    flex: 1,
  },
  child3: {
    backgroundColor: 'green',
    // alignSelf: 'center',
    // height: 1,
    // width: 110,
    flex: 1,
  },
  childView1: {
    flex: 1,
    flexDirection: 'row',
  },
  childView2: {
    flexDirection: 'row',
    flex: 1,
  },
});

export default BoxScreen;
