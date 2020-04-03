//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MyFatlist from './src/common/MyFatlist';
import Form from './src/common/Form';
import List from './src/common/List';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          <List />
        </ScrollView> */}
        <List/>
    </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
  },
});

//make this component available to the app

