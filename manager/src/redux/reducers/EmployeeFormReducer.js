import {UPDATE_EMPLOYEE, CLEAR_USER_INFO, SET_LOADING} from '../types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: 'Monday',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };
    case CLEAR_USER_INFO:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return {...state};
  }
};
