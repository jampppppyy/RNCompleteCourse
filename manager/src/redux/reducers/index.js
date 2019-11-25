import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  LoginReducer,
  EmployeeFormReducer,
  EmployeeReducer,
});
