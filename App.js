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

const defaultStore = {
  words: [
    {id: '1', en: 'One', vn: 'Mot', isMemorized: true},
    {id: '2', en: 'Two', vn: 'Hai', isMemorized: false},
    {id: '3', en: 'Three', vn: 'Ba', isMemorized: false},
    {id: '4', en: 'Four', vn: 'Bon', isMemorized: false},
    {id: '5', en: 'Five', vn: 'Nam', isMemorized: false},
    {id: '6', en: 'Six', vn: 'Sau', isMemorized: true},
    {id: '7', en: 'Seven', vn: 'Bay', isMemorized: false},
    {id: '8', en: 'Eight', vn: 'Tam', isMemorized: true},
    {id: '9', en: 'Nine', vn: 'Chin', isMemorized: false},
    {id: '10', en: 'Ten', vn: 'Muoi', isMemorized: true},
  ],
  shouldShowform: false,
  filtermode: 'Show_All',
  items: [
      {label: 'Show All',value: 'Show_All',},
      {label: 'Show Forgot',value: 'Show_Forgot',},
      {label: 'Show Memorized',value: 'Show_Memorized',},
  ],         
};
const store = createStore((state = defaultStore, action) => {
  if(action.type === 'ON_TOGGLE_FORM'){
    return{...state, shouldShowform:action.shouldShowform};
  }
  if(action.type === 'ON_ADD_WORD'){
    return{...state, shouldShowform:false, words:action.words }
  }
  if(action.type === 'ON_REMOVE_WORD'){
    return{...state, words:action.words}
  }
  return state;
});
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