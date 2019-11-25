import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from '../src/common';
export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  }

  login = () => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed!' })
          })
      });
  }
  render() {
    const { email, password, error } = this.state;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            onChangeText={text => { this.setState({ email: text }) }}
            value={email}
            placeholder="user@gmail.com"
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            onChangeText={text => { this.setState({ password: text }) }}
            value={password}
            placeholder="********"
            label="Password"
          />
        </CardSection>

        <Text style={{ alignSelf: 'center', color: 'red' }}>{error}</Text>
        <CardSection>
          <Button onPress={this.login}> Log in</Button>
        </CardSection>
      </Card>
    );
  }
}
