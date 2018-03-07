import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Dimensions, Text} from 'react-native';


import Styles from './Styles';

class NewToDoItem extends Component {
    handleNewToDo(todo){

    }
    render(){
        return(
            <View style={Styles.container}>
                <TextInput 
                style={Styles.input}
                placeholder="New ToDo"
                placeholderTextColor="#636e72"

                />
                <TouchableOpacity style={Styles.buttonContainer} onPress={() => this.handleNewToDo}>
                    <Text style={Styles.text}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewToDoItem;