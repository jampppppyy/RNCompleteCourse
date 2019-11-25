import {UPDATE_EMPLOYEE, CLEAR_USER_INFO, SET_LOADING} from '../types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
export const updateEmployee = ({prop, value}) => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: {prop, value},
  };
};

export const createEmployee = ({name, phone, shift}) => {
  const {currentUser} = firebase.auth();
  return dispatch => {
    dispatch({
      type: SET_LOADING,
    });
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        alert('User Succesfully Created!');
        Actions.pop();
        dispatch({
          type: CLEAR_USER_INFO,
        });
      });
  };
};

export const saveEmployee = ({name, phone, shift, uid}) => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({name, phone, shift})
      .then(() => {
        Actions.reset('employeeList');
        console.log('saved!!');
      })
      .catch(e => console.log('error on updating!', e));
  };
};
