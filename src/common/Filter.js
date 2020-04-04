import React, { Component } from 'react'
import { Text, View, Picker } from 'react-native'

export default class Filter extends Component {
    constructor (props){
        super(props);
        this.state ={
            filteMode:'Show_All',
        }
    }
    render() {
        return (
            <Picker
                selectedValue ={this.state.filteMode}
                style={{height: 50, width: '100%'}}
                onValueChange={itemValue => {
                    this.setState({filteMode: itemValue});
                }}>
                <Picker.Item label="Show All" value="Show_All"/>
                <Picker.Item label="Show Forgot" value="Show_Forgot"/>
                <Picker.Item label="Show Merozied" value="Show_Merozied"/>
            </Picker>
        )
    }
}
