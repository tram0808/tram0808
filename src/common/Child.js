import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { PureComponent } from 'react';

export default class Child extends PureComponent {
    constructor (props){
        super (props)
        this.state ={
            text :''
        };
    }
    render() {
        console.log('render Child');
        const {onIncrease, count, onDecrease, onReset} = this.props
        return (
            <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
            <TouchableOpacity 
            onPress={() => onIncrease(count)}
            style={{backgroundColor: 'green', padding: 10}}>
                <Text style={{
                    color: 'white', 
                    fontStyle: 'italic', 
                    fontWeight: 'bold'}}>
                Increase
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => onDecrease(count)}
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
            onPress={() => onReset(count)}
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