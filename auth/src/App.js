import React, { Component } from 'react';
import { Text, View, TextInput, FlatList } from 'react-native';
import { Header, SearchableInput } from './common/index';
import firebase from 'firebase';
import LoginForm from '../src/LoginForm';
import { CardSection } from '../src/common/index';
import { Item, Picker, Icon, Input } from 'native-base';

export default class App extends Component {
  // componentWillMount() {
  //   firebase.initializeApp({
  //     apiKey: 'AIzaSyDlvtqvZLEPjxH7vY6MktFmg1yUaIntIvE',
  //     authDomain: 'authentication2-73fcb.firebaseapp.com',
  //     databaseURL: 'https://authentication2-73fcb.firebaseio.com',
  //     projectId: 'authentication2-73fcb',
  //     storageBucket: '',
  //     messagingSenderId: '499239517819',
  //     appId: '1:499239517819:web:605fd3ec2c868da3b0ecde',
  //   });
  // }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="My App" />
        {/* <LoginForm /> */}
        <SearchableInput />
      </View>
    );
  }
}