import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from '../components/common';
import {connect} from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  loginRequest,
  clearErrorMsg,
} from '../redux/actions/index';
import {ActionConst} from 'react-native-router-flux';

class LoginForm extends Component {
  emailTextChange = email => {
    const {EmailChanged} = this.props;
    EmailChanged(email);
  };

  passwordTextChange = pass => {
    const {PasswordChanged, ClearErrMsg} = this.props;
    PasswordChanged(pass);
    ClearErrMsg();
  };

  loginRequest = () => {
    const {LoginRequest} = this.props;
    const {email, password} = this.props;
    LoginRequest({email, password});
  };

  renderError = () => {
    const {error} = this.props;
    if (error) {
      return (
        <Text
          style={{
            textAlign: 'center',
            color: 'red',
            backgroundColor: 'white',
            padding: 10,
          }}>
          {error}
        </Text>
      );
    }
  };

  renderButton = () => {
    const {loading} = this.props;
    if (loading) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.loginRequest}>LOGIN</Button>;
  };
  render() {
    const {email, password, user} = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.emailTextChange}
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            onChangeText={this.passwordTextChange}
            value={password}
            secureTextEntry
          />
        </CardSection>
        {this.renderError()}
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({LoginReducer}) => {
  const {email, password, user, error, loading} = LoginReducer;
  return {
    email,
    password,
    user,
    error,
    loading,
  };
};
export default connect(
  mapStateToProps,
  {
    EmailChanged: emailChanged,
    PasswordChanged: passwordChanged,
    LoginRequest: loginRequest,
    ClearErrMsg: clearErrorMsg,
  },
)(LoginForm);
