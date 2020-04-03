import React, {Component} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,FlatList,TextInput,} from 'react-native';
  
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
              onPress={() => this.toggleMemorized(item.id)}
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
    toggleForm = () => {
      this.setState({shouldShowform: !this.state.shouldShowform});
    };
    addword = () => {
        const newWord = {
          id: this.state.words.length + 1 + '',
          en: this.txtEn,
          vn: this.txtVn,
          isMemorized: false,
        };
        const newWords = this.state.words.concat(newWord);
        this.txtVn = '';
        this.txtEn = '';
        this.setState({words: newWords, shouldShowform: false}, () => {
          const length = this.state.words.length;
          this.flatlist.scrollToIndex({
            animated: true,
            index: length - 2 + '',
          });
        });
      };
    renderForm = () => {
      if (this.state.shouldShowform) {
        return (
          <View>
            <TextInput
              style={styles.textStyleEn}
              placeholder="English"
              onChangeText={text => (this.txtEn = text)}
            />
            <TextInput
              style={styles.textStyleVn}
              placeholder="Vietnamese"
              onChangeText={text => (this.txtVn = text)}
            />
            <View style={styles.containerButtonForm}>
              <TouchableOpacity
                onPress={this.addword}
                style={styles.backgroudAddWord}>
                <Text style={styles.textTouchableAddWord}>Add word</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.toggleForm()}
                style={styles.backgroudCancel}>
                <Text style={styles.textTouchableCancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      } else {
        return (
          <TouchableOpacity
            onPress={() => this.toggleForm()}
            style={styles.backgroudPlus}>
            <Text style={styles.textPlus}>+</Text>
          </TouchableOpacity>
        );
      }
    };
    render() {
      return (
        <View style={styles.container}>
          <FlatList
            ref={ref => {
                this.flatlist = ref;
            }}
            ListHeaderComponentStyle={styles.backgroundHeader}
            ListHeaderComponent={this.renderForm}
            data={this.state.words}
            renderItem={({item}) => this.renderItemFlatlist(item)}
            keyExtractor={item => item.id}
            extraData={this.state.words}
          />
        </View>
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
    textStyleEn: {
      height: 50,
      borderColor: 'black',
      borderWidth: 1,
      margin: 10,
      fontSize: 20,
      paddingHorizontal: 20,
    },
    textStyleVn: {
      height: 50,
      borderColor: 'black',
      borderWidth: 1,
      margin: 10,
      fontSize: 20,
      paddingHorizontal: 20,
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