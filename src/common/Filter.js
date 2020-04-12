import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {connect} from 'react-redux';

// Picker cho giao dien ios
class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {label: 'Show All',value: 'Show_All',},
                {label: 'Show Forgot',value: 'Show_Forgot',},
                {label: 'Show Memorized',value: 'Show_Memorized',},
            ],             
        };
    }
    onFilterMode = filtermode => {
        this.setState({filtermode});
    }
    render() {
        return (
            <View style={styles.container}>
                <RNPickerSelect
                    placeholder={{
                        label: 'Show_All...',
                        value: null,
                    }}
                    items={this.state.items}
                    onValueChange={(itemValue) => {
                        this.props.dispatch({type: 'ON_SET_FILTER_MODE', filtermode:itemValue});
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.filterMode}
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
        paddingHorizontal: 17,
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

const mapStoreToProps = function(state){
    return{filterMode: state.filterMode};
}
export default connect(mapStoreToProps)(Filter);