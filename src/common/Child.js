import React, { Component,PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux';

class Child extends PureComponent {
  render() {
    return (
      <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
        <TouchableOpacity 
        onPress={() => this.props.dispatch({type: 'INCREMENT'})}
        style={{backgroundColor: 'green', padding: 10}}>
          <Text style={{
              color: 'white', 
              fontStyle: 'italic', 
              fontWeight: 'bold'}}>
          Increase
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => this.props.dispatch({type: 'DECREMENT'})}
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
        onPress={() => this.props.dispatch({type: 'RESET'})}
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
export default connect()(Child);