//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Word from './src/common/Word';

const words = [
  {id: '1', en: 'One', vn: 'Mot', isMemorized:true},
  {id: '2', en: 'Two', vn: 'Hai', isMemorized:false},
  {id: '3', en: 'Three', vn: 'Ba', isMemorized:false},
  {id: '4', en: 'Four', vn: 'Bon', isMemorized:false},
  {id: '5', en: 'Five', vn: 'Nam', isMemorized:false},
  {id: '6', en: 'Six', vn: 'Sau', isMemorized:true},
  {id: '7', en: 'Seven', vn: 'Bay', isMemorized:false},
  {id: '8', en: 'Eight', vn: 'Tam', isMemorized:true},
  {id: '9', en: 'Nine', vn: 'Chin', isMemorized:false},
  {id: '10', en: 'Ten', vn: 'Muoi', isMemorized:true},
];
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {words.map(word => (
          <Word word={word} key={word.en} />
        ))}
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

