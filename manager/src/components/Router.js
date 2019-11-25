import React from 'react';
import {Scene, Router, Stack, Actions} from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';
const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="LOGIN" initial />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
          />
          <Scene
            title="Create Employee"
            key="employeeCreate"
            component={EmployeeCreate}
          />
          <Scene
            title="Edit Employee"
            key="employeeEdit"
            component={EmployeeEdit}
          />
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
