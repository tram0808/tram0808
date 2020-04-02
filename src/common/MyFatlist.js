import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

  export default class MyFatlist extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
        words : [
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
      };
    }
    renderItemFlatlist = item => {
      return (
        <View style={styles.containerGroupWord} key={item.id}>
          <View style={styles.groupText}>
            <Text style={styles.textEn}>{item.en}</Text>
            <Text style={styles.textVn}>
              {item.isMemorized ? '----' : item.vn}
            </Text>
          </View>
          <View style={styles.groupButton}>
            <TouchableOpacity
              onPress={() => {
              const newWords = this.state.words.map(word => {
                if (word.id === item.id) {
                  return {...word, isMemorized: !word.isMemorized};
                }
                return word;
              });
              this.setState({words: newWords});
            }}
              style={styles.buttonMemorized(item.isMemorized)}>
              <Text style={styles.textMemorized}>
                {item.isMemorized ? 'Forgot' : 'Memorized'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.removeWord(item.id)}
              style={styles.buttonRemove}>
              <Text style={styles.textRemove}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
    render() {
      return (
        <FlatList
            data={this.state.words}
            renderItem={({item}) => this.renderItemFlatlist(item)}
            keyExtractor={item => item.id}
            extraData={this.state.words}
/>
    );
  }
}      

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerGroupWord: {
      justifyContent: 'space-between',
      marginVertical: 10,
      borderRadius: 10,
      backgroundColor: 'gainsboro',
      paddingVertical: 10,
      marginHorizontal: 20,
    },
    groupText: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    textEn: {
      color: '#27A744',
      fontSize: 20,
    },
    textVn: {
      color: '#DC3545',
      fontSize: 20,
    },
    groupButton: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    buttonMemorized: isMemorized => {
      return {
        backgroundColor: isMemorized ? '#27A744' : '#DC3545',
        padding: 10,
      };
    },
    buttonRemove: {
      backgroundColor: '#E0A800',
      padding: 10,
    },
    textMemorized: {
      color: '#ffffff',
      fontSize: 20,
    },
    textRemove: {
      color: '#ffffff',
      fontSize: 20,
    },
  });