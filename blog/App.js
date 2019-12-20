import React from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import {BlogProvider} from './src/context/BlogContext';
const navigator = createStackNavigator(
  {
    IndexScreen,
  },
  {
    initialRouteName: 'IndexScreen',
    defaultNavigationOptions: {
      title: 'Blog Post',
    },
  },
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BlogProvider>
        <App />
      </BlogProvider>
    </SafeAreaView>
  );
};
