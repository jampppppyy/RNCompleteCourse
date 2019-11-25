import React, {Component} from 'react';
import {Text, View, Picker} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {updateEmployee, createEmployee} from '../redux/actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  buttonPress = () => {
    const {CREATE_EMPLOYEE, name, phone, shift} = this.props;
    CREATE_EMPLOYEE({name, phone, shift});
  };

  renderButton = () => {
    const {loading} = this.props;
    if (loading) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.buttonPress}>Create</Button>;
  };
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({EmployeeFormReducer}) => {
  const {name, phone, shift, loading} = EmployeeFormReducer;
  return {
    name,
    phone,
    shift,
    loading,
  };
};
export default connect(
  mapStateToProps,
  {
    updateEmployee,
    CREATE_EMPLOYEE: createEmployee,
  },
)(EmployeeCreate);
