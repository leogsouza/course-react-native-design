import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, KeyboardAvoidingView } from 'react-native'

import Form from './Form'

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('./images/login-logo.png')} />
          <Text style={styles.title}>A Simple Login App</Text>
        </View>
        <View style={styles.form}>
          <Form />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282830',
    width: Dimensions.get('window').width,
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#fff',
    marginTop: 10,
  },
  form: {
    flex: 1,
  }
})
