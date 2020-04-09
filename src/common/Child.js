import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class Child extends Component {
    constructor (props){
        super (props)
        this.state ={
            count :0
        };
        console.log('Constructor');
    }

    render() {
        console.log('render Child');
        return (
            <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
            <TouchableOpacity 
            onPress={this.increase}
            style={{backgroundColor: 'green', padding: 10}}>
                <Text style={{
                    color: 'white', 
                    fontStyle: 'italic', 
                    fontWeight: 'bold'}}>
                Increase
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={this.decrease}
            style={{
                backgroundColor: 'red', 
                padding: 10}}>
                <Text style={{
                    color: 'white', 
                    fontStyle: 'italic', 
                    fontWeight: 'bold'}}>
                Decrease
                </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={this.reset}
            style={{
              backgroundColor: 'slategray', 
              padding: 10}}>
            <Text
              style={{
                  color: 'white', 
                  fontStyle: 'italic', 
                  fontWeight: 'bold'}}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
        );  
    }

    }
const styles = StyleSheet.create({
    
});