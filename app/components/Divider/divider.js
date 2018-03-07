import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class Divider extends Component {
    render(){
        return(
         <View style={Styles.container}></View>   
        )
    }
}

export default Divider;

const Styles = StyleSheet.create({
    container: {
        height:StyleSheet.hairlineWidth,
        backgroundColor: '#dfe6e9',
        marginTop:20
    },
});