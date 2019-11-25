// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React, { Component } from "react";
import { Text, AppRegistry, View } from "react-native";
import Header from "./src/components/header";
import AlbumsList from "./src/components/AlbumsList";

const App = () => {
  return (
    <View>
      <Header title="Albums" />
      <AlbumsList />
    </View>
  );
};

AppRegistry.registerComponent("reactNativeReduxAlbum", () => App);
