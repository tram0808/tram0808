import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Child from './Child';
export default class Box extends Component {
  constructor (props){
      super (props)
      this.state ={
          count :0
      };
      console.log('Constructor');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate')
    return true;
  }
  getSnapshotBeforeUpdate(nextProps, nextState){
    console.log('getSnapshotBeforeUpdate')
    return true;
  }
  render() {
      console.log('render Box');
  return (
    <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
        onPress={() => this.setState({count: this.state.count + 1})}>
          <Text style={{color: 'red', fontSize: 40}}>
            Count : {this.state.count}
          </Text>
        </TouchableOpacity>
        
        <Child/>
    </View>
  );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }
}
