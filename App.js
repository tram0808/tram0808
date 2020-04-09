//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Picker } from 'react-native';
import MyFatlist from './src/common/MyFatlist';
import Form from './src/common/Form';
import List from './src/common/List';
import Filter from './src/common/Filter';
import Box from './src/common/Box';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
          <List />
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

