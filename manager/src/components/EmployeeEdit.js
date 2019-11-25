import React, {Component} from 'react';
import {Text, View, Picker} from 'react-native';
import _ from 'lodash';
import {Card, CardSection, Input, Button, Spinner, Confirm} from './common';
import {connect} from 'react-redux';
import {updateEmployee, saveEmployee, deleteEmployee} from '../redux/actions';
import EmployeeForm from './EmployeeForm';
class EmployeeEdit extends Component {
  state = {
    visible: false,
  };
  componentDidMount() {
    const {employeeData, UPDATE_EMPLOYEE} = this.props;
    _.each(employeeData, (value, prop) => {
      UPDATE_EMPLOYEE({prop, value});
    });
  }

  onSave = () => {
    const {name, phone, shift, employeeData, SAVE_EMPLOYEE} = this.props;
    const {uid} = employeeData;
    SAVE_EMPLOYEE({name, phone, shift, uid});
  };

  renderButton = () => {
    const {loading} = this.props;
    if (loading) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.onSave}>Save</Button>;
  };

  positiveCallback = () => {
    const {employeeData, DELETE_EMPLOYEE} = this.props;
    const {uid} = employeeData;
    DELETE_EMPLOYEE(uid);
    this.setState({visible: false});
  };

  negativeCallback = () => {
    this.setState({visible: false});
  };
  onDelete = () => {
    this.setState({visible: true});
  };

  render() {
    const {visible} = this.state;
    const {name} = this.props;
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>{this.renderButton()}</CardSection>
        <CardSection>
          <Button onPress={this.onDelete}>Delete</Button>
        </CardSection>

        <Confirm
          visible={visible}
          positiveCallback={this.positiveCallback}
          negativeCallback={this.negativeCallback}>
          Are you sure you want to delete {name}?
        </Confirm>
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
    UPDATE_EMPLOYEE: updateEmployee,
    SAVE_EMPLOYEE: saveEmployee,
    DELETE_EMPLOYEE: deleteEmployee,
  },
)(EmployeeEdit);
