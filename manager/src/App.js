import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../src/redux/reducers';
import firebase from 'firebase';
import Router from './components/Router';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCTW73_JbdtSwJANJRJyIrlj2U7YLdZTSk',
      authDomain: 'projectmanager-bf641.firebaseapp.com',
      databaseURL: 'https://projectmanager-bf641.firebaseio.com',
      projectId: 'projectmanager-bf641',
      storageBucket: 'projectmanager-bf641.appspot.com',
      messagingSenderId: '672652078753',
      appId: '1:672652078753:web:235a85141c094314ff4ae0',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
