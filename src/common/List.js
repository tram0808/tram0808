import React, {Component} from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Form from './Form';
import Filter from './Filter';
import Word from './Word';
export default class List extends Component {
  constructor(props) {
    super(props);
    this.txtEn = '';
    this.txtVn = '';
    this.state = {
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
      filterMode: 'Show_All',
        items: [
            {label: 'Show All',value: 'Show_All',},
            {label: 'Show Forgot',value: 'Show_Forgot',},
            {label: 'Show Memorized',value: 'Show_Memorized',},
        ],         
    };
  }
  toggleMemorized = id => {
    const newWords = this.state.words.map(item => {
      if (item.id === id) {
        return {...item, isMemorized: !item.isMemorized};
      }
      return item;
    });
    this.setState({words: newWords});
  };
  removeWord = id => {
    const newWords = this.state.words.filter(item => item.id !== id);
    this.setState({words: newWords});
  };
  onToggleForm = shouldShowform => {
    this.setState({shouldShowform: shouldShowform});
  };
  onAddword = words => {
    this.setState({words, shouldShowform: false});
  };
    render (){
      return (
        <ScrollView style={styles.container}>
          <Form 
            onAddword={this.onAddword}
            words={this.state.words}
            shouldShowform={this.state.shouldShowform}
            onToggleForm={this.onToggleForm} />
          <Filter filterMode={this.state.filterMode} />
          <Word words={this.state.words} filterMode={this.state.filterMode} />
        </ScrollView>
    );
}
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:10,
    },
    
    containerButtonForm: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    backgroudAddWord: {
      backgroundColor: '#28a745',
      padding: 15,
      borderRadius: 8,
    },
    textTouchableAddWord: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
    backgroudCancel: {
      backgroundColor: 'red',
      padding: 15,
      borderRadius: 8,
    },
    textTouchableCancel: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
    backgroudPlus: {
      marginHorizontal: 20,
      paddingVertical: 15,
      backgroundColor: '#28a745',
      alignItems: 'center',
      borderRadius: 5,
    },
    textPlus: {
      color: 'white',
      fontSize: 20,
    },
    backgroundHeader: {
      marginTop: 10,
    },

  });