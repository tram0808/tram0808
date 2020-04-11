//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Picker } from 'react-native';
import MyFatlist from './src/common/MyFatlist';
import Form from './src/common/Form';
import List from './src/common/List';
import Filter from './src/common/Filter';
import Box from './src/common/Box';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore((state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  if (action.type === 'DECREMENT') {
    return state - 1;
  }
  if (action.type === 'RESET') {
    return 0;
  }
  return state;
});
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Box />
        </Provider>
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


