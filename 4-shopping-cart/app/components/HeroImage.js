import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'

export default class HeroImage extends Component {
  render() {
    return (
        <Image style={styles.hero} source={require('../img/img2.jpeg')}></Image>
    )
  }
}

const styles = StyleSheet.create({
  hero: {
    height: 250,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  }
})
