import React, { Component } from 'react'
import { Text, View , StyleSheet, FlatList, ActivityIndicator, RefreshControl} from 'react-native'
import word from './Word';

const words=['One', 'Tow', 'Three','Four']
export default class MyFalist extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoading:false,
        }
    }
    render() {
        return (
            <FlatList
                // horizontal={false} //true: cot, false: hang ngang
                data = {words}
                renderItem ={({item}) => {
                    return <Text>{item}</Text>;
                }}
                keyExtractor={item => item}
                extraData={words}
                ItemSeparatorComponent = {() =>{
                    return (
                        <View style={{width: '100%', height:1, backgroundColor: 'black'}} />
                    );
                }} 
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={() => this.setState({isLoading: true})} 
                    />
                }
            />
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });