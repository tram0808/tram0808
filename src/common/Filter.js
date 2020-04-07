import React from 'react';
import { Alert, Text, TextInput, StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
// Picker cho giao dien ios
export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favColor: undefined,
            items: [
                {label: 'Show All',value: 'Show_All',},
                {label: 'Show Forgot',value: 'Show_Forgot',},
                {label: 'Show Memorized',value: 'Show_Memorized',},
            ],             
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select a color...',
                        value: null,
                    }}
                    items={this.state.items}
                    onValueChange={(value) => {
                        this.setState({
                            favColor: value,
                        });
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.favColor}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});