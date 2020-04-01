import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            words : [
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
              ],
        };
    }
    render() {
        return (
        <View style={styles.container}>
            {this.state.words.map(word =>{
                return (
                    <View style={styles.containerWord} key={word.id}>
                        <View style={styles.groupText}>
                            <Text style={styles.textEn}> 
                                {word.en} 
                            </Text>
                            <Text style={styles.textVn}> 
                                {word.isMemorized ? '---': word.vn} 
                            </Text>
                        </View>
                        <View style={styles.groupButton}>
                            <TouchableOpacity style={styles.buttonMemorized(word.isMemorized)}>
                                <Text style={styles.textMemorized}>{word.isMemorized ? 'Forgot' : 'Memorized' }</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonRemove}>
                                <Text style={styles.textRemove}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            })}
        </View>
    );
}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    containerWord:{
        justifyContent:'space-evenly',
        marginVertical:10,
        borderRadius: 10,
        backgroundColor: 'gainsboro',
        paddingVertical: 10,
        marginHorizontal: 20,
    
    },
    groupText:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    textVn:{
        color:'red',
        fontSize:20,
    },
    textEn:{
        color:'blue',
        fontSize:20,
        marginRight:10,
    },
    groupButton:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:5,
    },
    buttonMemorized: isMemorized =>{
        return {
            backgroundColor: isMemorized ? "blue" : "red",
            padding:5,
            
        };
    },
    textMemorized:{
        color:'#ffffff',
        fontSize:20,
    },
    buttonRemove:{
        backgroundColor:'#E0A800',
        padding:10,
    },
    textRemove:{
        color:'#ffffff',
        fontSize:20,
    },
      
  });