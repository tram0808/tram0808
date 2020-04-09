import React, { Component } from 'react'
import {Text,KeyboardAvoidingView,TextInput,TouchableOpacity,View,StyleSheet} from 'react-native';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.txtEn = '';
        this.txtVn = '';
      }
    renderForm = () => {
    if (this.props.shouldShowform) {
        return (
            <View>
                <TextInput
                style={styles.textStyleEn}
                    placeholder="English"
                    onChangeText={text => (this.txtEn = text)}
                />
                <TextInput
                style={styles.textStyleVn}
                    placeholder="Vietnamese"
                    onChangeText={text => (this.txtVn = text)}
                />
                <View
                    style={styles.containerButtonForm}>
                    <TouchableOpacity>
                        onPress{this.addword}
                        style={styles.backgroundAddWord}
                        <Text style={styles.textTouchableAddWord}>
                            Add word
                        </Text>  
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.toggleForm()}
                        style={styles.backgroundCanel}>
                        <Text style={styles.textTouchableCanel}>
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
            style={styles.backgroundPluss}>
            <Text
                style={styles.textPluss}>
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
const styles = StyleSheet.create({
    textStyleEn:{
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        fontSize: 20,
        paddingHorizontal: 20,
    },
    textStyleVn:{
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        fontSize: 20,
        paddingHorizontal: 20,
    },
    containerButtonForm: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    backgroundAddWord:{
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 8,
    },
    textTouchableAddWord:{
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'white'
    },
    backgroundCanel:{
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 8,
    },
    textTouchableCanel:{
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'white'
    },
    backgroundPluss:{
        marginHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#28a745',
        alignItems: 'center',
        borderRadius: 5,
    },
    textPluss:{
        color: 'white',
        fontSize: 20,
    },
});