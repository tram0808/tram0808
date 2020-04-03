//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MyFatlist from './src/common/MyFatlist';
import Form from './src/common/Form';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          <List />
        </ScrollView> */}
        {/* <Abv/> */}
        <Form />
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

