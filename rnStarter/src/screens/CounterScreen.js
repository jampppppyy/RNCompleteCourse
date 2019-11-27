import React, {useReducer} from 'react';
import {View, Text, Button} from 'react-native';

const INCREASE = 'increase';
const DECREASE = 'decrease';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: action.payload,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return {
        state,
      };
  }
};

const CounterScreen = () => {
  const INITIAL_STATE = {
    counter: 0,
  };
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({type: INCREASE, payload: state.counter + 1})}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({type: DECREASE, payload: state.counter - 1})}
      />
      <Text style={{textAlign: 'center', padding: 20}}>
        Count: {state.counter}
      </Text>
    </View>
  );
};

export default CounterScreen;
