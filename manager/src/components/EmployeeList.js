import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import {fetchEmployees} from '../redux/actions/';
import Employee from './Employee';
import {Confirm} from './common';

class EmployeeList extends Component {
  componentDidMount() {
    const {fetchEmployees} = this.props;
    fetchEmployees();
  }

  renderItem = ({item, index}) => (
    <Employee employeeData={item} index={index} />
  );
  render() {
    const {employees} = this.props;
    return (
      <View style={{flex: 1}}>
        <FlatList data={employees} renderItem={this.renderItem} />
      </View>
    );
  }
}

const mapStateToProps = ({EmployeeReducer}) => {
  const employees = _.map(EmployeeReducer, (val, uid) => ({...val, uid}));
  return {
    employees,
  };
};

export default connect(
  mapStateToProps,
  {fetchEmployees},
)(EmployeeList);
