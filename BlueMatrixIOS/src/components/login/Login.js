import React, { Component } from 'react';
import { StyleSheet, View, Image} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../../images/bm_logo_white.png')}>
          </Image>
        </View>
        <View style={styles.formContainer}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#092d57'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'

  },
  logo: {
    width: 100,
    height: 100
  }
});
