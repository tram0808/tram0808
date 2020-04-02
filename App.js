//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Word from './src/common/Word';
import Box from './src/common/Box';
import List from './src/common/List';
import MyFalist from './src/common/MyFalist';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          <List />
        </ScrollView> */}
        <MyFalist/>
    </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app

