//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
class ImageView extends Component {
    render() {
        return (
            <Image 
                style={{width: 100, height: 100}}
                source={{
                    uri:'https://techtalk.vn/wp-content/uploads/2018/12/react-native.png'
                }}
                style={{width : 300 , height : 300}}
                resizeMode="center"
                source={require('../img/hinh1.jpg')}
            />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ImageView;
