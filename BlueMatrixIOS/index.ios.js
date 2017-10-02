import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Splash from './Splash';
import Login from './src/components/login/Login'


export default class BlueMatrixIOS extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('BlueMatrixIOS', () => BlueMatrixIOS);
