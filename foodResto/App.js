import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {SearchScreen, BusinessShow} from './src/screens';
const navigator = createStackNavigator(
  {
    SearchScreen,
    BusinessShow,
  },
  {
    initialRouteName: 'SearchScreen',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  },
);

export default createAppContainer(navigator);
