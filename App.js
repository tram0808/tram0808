//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Picker } from 'react-native';
import Form from './src/common/Form';
import List from './src/common/List';
import Filter from './src/common/Filter';
import Box from './src/common/Box';
import {Provider} from 'react-redux';
import store from './src/common/redux/store';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <List />
        </Provider>
    </View>
    );
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;