//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class word extends Component {
    render() {
        // cach 1 lay gia tri tu 1 object
    // const en = this.props.word.en;
    // const vn = this.props.word.vn;
    // cach 2 dung destructuring: ko thay doi duoc key word
        const {en, vn, isMemorized} = this.props.word;            
        
        return (
            <View style={styles.container}>
                <View style={styles.groupText}>
                    <Text style={styles.textEn}> 
                        {en} 
                    </Text>
                    <Text style={styles.textVn}> 
                        {isMemorized ? '---': vn} 
                    </Text>
                </View>
                <View style={styles.groupButton}>
                    <TouchableOpacity style={styles.buttonMemorized(isMemorized)}>
                        <Text style={styles.textMemorized}>{isMemorized ? 'Forgot' : 'Memorized' }</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRemove}>
                        <Text style={styles.textRemove}>Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container:{
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

//make this component available to the app
export default word;
