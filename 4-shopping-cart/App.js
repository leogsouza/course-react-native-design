import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Body from './app/components/Body';
import Header from './app/components/Header';
import HeroImage from './app/components/HeroImage';
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <HeroImage />
      <Body />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
