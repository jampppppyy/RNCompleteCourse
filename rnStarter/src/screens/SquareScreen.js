import React, {useState, useReducer} from 'react';
import {View, Text} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const reducer = (state, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case 'red':
      return {
        ...state,
        red: action.payload,
      };
    case 'green':
      console.log('state.green: ', state.green);
      return {
        ...state,
        green: action.payload,
      };
    case 'blue':
      return {
        ...state,
        blue: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

const SquareScreen = () => {
  const COLOR_INCREMENT = 20;
  const INITIAL_STATE = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <View>
      <ColorCounter
        color="red"
        value={state.red}
        onIncrease={() =>
          dispatch({type: 'red', payload: state.red + COLOR_INCREMENT})
        }
        onDecrease={() =>
          dispatch({type: 'red', payload: -1 * COLOR_INCREMENT + state.red})
        }
      />
      <ColorCounter
        color="green"
        value={state.green}
        onIncrease={() => dispatch({type: 'green', payload: COLOR_INCREMENT})}
        onDecrease={() =>
          dispatch({type: 'green', payload: -1 * COLOR_INCREMENT})
        }
      />
      <ColorCounter
        color="blue"
        value={state.blue}
        onIncrease={() => dispatch({type: 'blue', payload: COLOR_INCREMENT})}
        onDecrease={() =>
          dispatch({type: 'blue', payload: -1 * COLOR_INCREMENT})
        }
      />
      <View
        style={{
          height: 100,
          width: 100,
          // backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
