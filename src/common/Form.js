import React, { Component } from 'react'
import {Text,KeyboardAvoidingView,TextInput,TouchableOpacity,View,} from 'react-native';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.txtEn = '';
        this.txtVn = '';
        this.state = {
          shouldShowform: false,
        };
      }
      toggleForm = () => {
        this.setState({shouldShowform: !this.state.shouldShowform});
      };
      renderForm = () => {
        if (this.state.shouldShowform) {
          return (
                <View>
                    <TextInput
                    style={{
                        height: 50,
                        borderColor: 'black',
                        borderWidth: 1,
                        margin: 10,
                        fontSize: 20,
                        paddingHorizontal: 20,
                        }}
                        placeholder="English"
                        onChangeText={text => (this.txtEn = text)}
                    />
                    <TextInput
                    style={{
                        height: 50,
                        borderColor: 'black',
                        borderWidth: 1,
                        margin: 10,
                        fontSize: 20,
                        paddingHorizontal: 20,
                        }}
                        placeholder="Vietnamese"
                        onChangeText={text => (this.txtVn = text)}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: 20,
                        }}>
                        <TouchableOpacity
                        onPress={() => {
                            console.log(this.txtEn, this.txtVn);
                        }}
                        style={{
                            backgroundColor: '#28a745',
                            padding: 15,
                            borderRadius: 8,
                        }}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                            Add word
                        </Text>   
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => this.toggleForm()}
                        style={{
                            backgroundColor: 'red',
                            padding: 15,
                            borderRadius: 8,
                        }}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                            Cancel
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
    }   else {
            return (
                <TouchableOpacity
                onPress={() => this.toggleForm()}
                style={{
                    marginHorizontal: 20,
                    paddingVertical: 15,
                    backgroundColor: '#28a745',
                    alignItems: 'center',
                    borderRadius: 5,
                }}>
                <Text
                    style={{
                    color: 'white',
                    fontSize: 20,
                    }}>
                    +
                </Text>
                </TouchableOpacity>
            );
        }
    };
  render() {
    return (
      <KeyboardAvoidingView behavior="height">
        {this.renderForm()}
      </KeyboardAvoidingView>
    );
  }
}
