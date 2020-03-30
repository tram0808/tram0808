import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Box extends Component {
    constructor (props){
        super (props)
        this.state ={
            count :0
        };
        console.log('Constructor');
    }
    UNSAFE_componentWillMount() {
        console.log('UNSAFE_componentWillMount');
      }
  render() {
      console.log('render');
      let count = 0;
    return (
    <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{
            color: 'red', 
            fontSize: 40
            }}>
          Count : {this.state.count}
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
            <TouchableOpacity 
            onPress={() => {
                this.setState({count : this.state.count + 1}, () => {
                    alert(JSON.stringify(this.state.count));
                  });
            }}
            style={{backgroundColor: 'green', padding: 10}}>
                <Text style={{
                color: 'white', 
                fontStyle: 'italic', 
                fontWeight: 'bold'}}>
                Increase
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor: 'red', 
                padding: 10}}>
                <Text style={{
                    color: 'white', 
                    fontStyle: 'italic', 
                    fontWeight: 'bold'}}>
                Decrease
                </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
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
      </View>
    );
  }
}
