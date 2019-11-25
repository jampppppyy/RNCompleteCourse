import firebase from 'firebase';
import {EMPLOYEES_FETCH_SUCCESS} from '../types';
import {Actions} from 'react-native-router-flux';

export const fetchEmployees = () => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};

export const deleteEmployee = uid => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => Actions.reset('employeeList'))
      .catch(e => console.log('error on deletion, ', e));
  };
};
