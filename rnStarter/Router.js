import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import CounterScreen from './src/screens/CounterScreen';
import TextInputScreen from './src/screens/TextInputScreen';
import BoxScreen from './src/screens/BoxScreen';
const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="login" component={ColorScreen} />
        <Scene key="login" component={SquareScreen} />
        <Scene key="login" component={CounterScreen} />
        <Scene key="login" component={TextInputScreen} />
        <Scene key="login" component={BoxScreen} initial />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
