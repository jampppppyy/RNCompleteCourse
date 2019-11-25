import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_REQUEST,
  LOGIN_SUCESSS,
  LOGIN_FAILED,
  CLEAR_ERR_MSG,
} from '../types';

const initialState = {
  email: 'Test@test.com',
  password: '123qwe',
  user: null,
  error: '',
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload,
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case LOGIN_SUCESSS:
      return {
        ...state,
        ...initialState,
        user: action.payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: 'Authentication Failed',
        loading: false,
        password: '',
      };
    case CLEAR_ERR_MSG:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};
