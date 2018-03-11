import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Dimensions, Text} from 'react-native';
import PropTypes from 'prop-types';
import {addNewTodo} from '../../actions/NewToDo';
import {generateUUID} from '../../utils/uuid'
import Styles from './Styles';
import {connect} from 'react-redux';

class NewToDoItem extends Component {
    static propTypes = {
        dispatch : PropTypes.func,
        todoUUID : PropTypes.string
      }

    constructor(){
        super();
        this.state={todo:''};
    }
     handleNewToDo = () => {    
        let todoItem = {uuid:'', description:'', createdDate:'',updatedDate:'', isComplete:false};
        let uuid = generateUUID();
        todoItem.uuid = uuid;
        todoItem.description=this.state.todo;
        todoItem.createdDate=Date.now();
        todoItem.updatedDate=Date.now()
        todoItem.isComplete=false
        this.setState({todo:''});
        this.props.dispatch(addNewTodo(todoItem));
    }
    render(){
        return(
            <View style={Styles.container}>
                <TextInput 
                style={Styles.input}
                placeholder="New ToDo"
                placeholderTextColor="#636e72"
                onSubmitEditing={this.handleNewToDo}
                onChangeText={(text) => this.setState({todo : text})}
                value={this.state.todo}
                />

                <TouchableOpacity style={Styles.buttonContainer} onPress={() => this.handleNewToDo()}>
                    <Text style={Styles.text}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(NewToDoItem);