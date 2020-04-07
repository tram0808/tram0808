import React, {Component} from 'react';
import {Picker} from 'react-native';
// picker cho giao dien android
export default class Filter1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteMode: 'Show_All',
    };
  }
  render() {
    return (
      <Picker
        selectedValue={this.state.filteMode}
        style={{height: 50, width: '100%'}}
        onValueChange={itemValue => {
          this.setState({filteMode: itemValue});
        }}>
        <Picker.Item label="Show All" value="Show_All" />
        <Picker.Item label="Show Forgot" value="Show_Forgot" />
        <Picker.Item label="Show Memorized" value="Show_Memorized" />
      </Picker>
    );
  }
}