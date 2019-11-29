import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {SearchScreen} from './src/screens';
const navigator = createStackNavigator(
  {
    SearchScreen,
  },
  {
    initialRouteName: 'SearchScreen',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  },
);

export default createAppContainer(navigator);
