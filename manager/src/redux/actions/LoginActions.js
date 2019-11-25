import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCESSS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  CLEAR_ERR_MSG,
} from '../types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const emailChanged = email => {
  return {
    type: EMAIL_CHANGED,
    payload: email,
  };
};

export const passwordChanged = pass => {
  return {
    type: PASSWORD_CHANGED,
    payload: pass,
  };
};

export const loginRequest = ({email, password}) => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('signInWithEmailAndPassword');
        loginSuccess(dispatch, user);
      })
      .catch(() => {
        // firebase.auth().createUserWithEmailAndPassword(email, password);
        loginFailed(dispatch);
      });
    // .then(user => {
    //   console.log('createUserWithEmailAndPassword');
    //   loginSuccess(dispatch, user);
    // })
    // .catch(() => {
    //   loginFailed(dispatch);
    // });
  };
};

const loginFailed = dispatch => {
  dispatch({
    type: LOGIN_FAILED,
  });
};

export const clearErrorMsg = () => ({type: CLEAR_ERR_MSG});

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCESSS,
    payload: user,
  });
  Actions.jump('employeeList');
};
