import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Dimensions, Text} from 'react-native';


import Styles from './Styles';

class NewToDoItem extends Component {
    render(){
        return(
            <View style={Styles.container}>
                <TextInput style={Styles.input}/>
                <TouchableOpacity style={Styles.buttonContainer}>
                    <Text style={Styles.text}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewToDoItem;