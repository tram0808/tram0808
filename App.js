//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MyFatlist from './src/common/MyFatlist';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          <List />
        </ScrollView> */}
        {/* <Abv/> */}
        <MyFatlist />
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

