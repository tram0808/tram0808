import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Child from './Child';
import {connect} from 'react-redux';

class Box extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{color: 'red', fontSize: 40}}>
            Count : {this.props.count}
          </Text>
        <Child />
      </View>
    );
  }
}

const mapStateToprops = function (state){
  return {count: state};
};

export default connect(mapStateToprops)(Box);