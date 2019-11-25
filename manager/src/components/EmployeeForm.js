import React, {Component} from 'react';
import {Text, Picker} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {updateEmployee, createEmployee} from '../redux/actions';

class EmployeeCreate extends Component {
  nameChange = employeeName => {
    const {UPDATE_EMPLOYEE} = this.props;
    UPDATE_EMPLOYEE({prop: 'name', value: employeeName});
  };

  phoneChange = phone => {
    const {UPDATE_EMPLOYEE} = this.props;
    UPDATE_EMPLOYEE({prop: 'phone', value: phone});
  };

  shiftChange = shift => {
    const {UPDATE_EMPLOYEE} = this.props;
    UPDATE_EMPLOYEE({prop: 'shift', value: shift});
  };

  render() {
    const {name, phone, shift} = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Name"
            onChangeText={this.nameChange}
            value={name}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Input"
            placeholder="5555-555-555"
            onChangeText={this.phoneChange}
            value={phone}
          />
        </CardSection>
        <CardSection>
          <Text>Shift</Text>
          <Picker
            style={{flex: 1}}
            selectedValue={shift}
            onValueChange={this.shiftChange}>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
          </Picker>
        </CardSection>
      </Card>
    );
  }
}

export default connect(
  null,
  {
    UPDATE_EMPLOYEE: updateEmployee,
  },
)(EmployeeCreate);
