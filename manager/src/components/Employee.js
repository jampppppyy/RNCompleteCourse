import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {CardSection} from './common';
import {Actions} from 'react-native-router-flux';

export default class Employee extends Component {
  handlePress = () => {
    const {employeeData} = this.props;
    Actions.jump('employeeEdit', {employeeData});
  };
  render() {
    const {employeeData} = this.props;
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <CardSection>
          <Text>{employeeData.name}</Text>
        </CardSection>
      </TouchableOpacity>
    );
  }
}
