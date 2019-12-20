import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return {...state};
  }
};

const signUp = dispatch => {
  return async ({email, password}) => {
    console.log('IIFE');
    try {
      const response = await trackerApi.post('/signup', {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log('Error on Signup', error);
    }
  };
};

const signIn = dispatch => {
  return ({email, password}) => {
    //call api to sign authenticate
    // if success change state
    // if failed show error msg
  };
};

const signOut = dispatch => {
  //change the state
  return () => {};
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signIn, signOut, signUp},
  {isSignedIn: false},
);
