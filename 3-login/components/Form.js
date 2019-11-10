import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default class Form extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder="Username" placeholderTextColor="#719192" />
        <TextInput style={styles.input}
          placeholder="Password" placeholderTextColor="#719192" secureTextEntry={true} />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} >Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    paddingLeft: 10,
    marginBottom: 15
  },
  buttonContainer: {
    backgroundColor: '#27ae60',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
})