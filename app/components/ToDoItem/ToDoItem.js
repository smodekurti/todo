import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateToDo} from '../../actions/NewToDo';
import {ScrollView, View, Image, Text,TextInput,TouchableOpacity, StyleSheet, Dimensions, Keyboard} from 'react-native';
import { List, ListItem , CheckBox} from 'react-native-elements'
import Styles from './Styles';

class ToDoItem extends Component{
    static propTypes = {
        todoUUID : PropTypes.string,
        dispatch : PropTypes.func
    }

    constructor(props){
        super(props);
        this.state={
            switched:false,
        }
    }

    dispatchToUpdate = () =>{

        
        let todoItem = {
            uuid:this.props.todoUUID,
            updatedDate:Date.now(),
            isComplete:this.state.switched
        }
        this.props.dispatch(updateToDo(todoItem));
    }
    


    render(){
        return(
            <ListItem 
                key={this.props.index}
                title={this.props.title}
                hideChevron={true}
                switchButton
                switched={this.props.isComplete}
                onSwitch= {() => {
                    this.setState(
                        (state) => ({switched:!this.state.switched}),
                        this.dispatchToUpdate
                     )
                    
                }}
                containerStyle={Styles.listItem}
                titleStyle={this.state.switched ? Styles.titleComplete : Styles.title}
            />

        )
    }

}



export default connect()(ToDoItem);

    