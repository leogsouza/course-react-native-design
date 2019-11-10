import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native'

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView styles={styles.container} horizontal={true} pagingEnabled={true}>
        <View style={[styles.outer, styles.view1]}>
          <Text style={styles.innerText}>Welcome to Langos App</Text>
        </View>
        <View style={[styles.outer, styles.view2]}>
          <Text style={styles.innerText}>Best quality content</Text>
        </View>
        <View style={[styles.outer, styles.view3]}>
          <Text style={styles.innerText}>Available on iOS and Android</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  outer: {    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

  },
  view1: {
    backgroundColor: '#1287A5',
  },
  view2: {
    backgroundColor: '#E8000F',
  },
  view3: {
    backgroundColor: '#20B233',
  },
  innerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  }
})
