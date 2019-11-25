import React from 'react';
import {View, Text, Modal} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';
import {Card} from './Card';

const Confirm = ({children, positiveCallback, visible, negativeCallback}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => {}}>
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.75)',
        }}>
        <View style={{backgroundColor: 'white', padding: 30}}>
          <Text style={{padding: 20, textAlign: 'center'}}>{children}</Text>
          <View style={{flexDirection: 'row'}}>
            <Button onPress={positiveCallback}>CONFIRM</Button>
            <Button onPress={negativeCallback}>CANCEL</Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export {Confirm};
