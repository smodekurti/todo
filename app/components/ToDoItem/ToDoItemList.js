import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View, Image, Text,TextInput,TouchableOpacity, StyleSheet, Dimensions, Keyboard} from 'react-native';
import { List, ListItem , CheckBox} from 'react-native-elements'
import ToDoItem from './ToDoItem';
import Styles from './Styles';
import {connect} from 'react-redux';






class ToDoItemList extends Component{

  
  constructor(props){
    super(props);

  }

  componentWillMount(){
    //console.log(this.props.todoItems);
  }

  static propTypes = {
    todoItems : PropTypes.object,
    
  }
    
    render(){
        
         const containerStyles= [Styles.title];
         let list = Object.values(this.props.todoItems);
         
         if(list == null)
          list = new Array();

          list.sort(function (a,b){
            return a.updatedTime > b.updatedTime;
          });

        return(
            <ScrollView style={Styles.container} showsVerticalScrollIndicator={false} > 
                <List containerStyle={Styles.list}>
                {
                    list.map((l, i) => (
                        <ToDoItem 
                            index={i}
                            title={l.description}
                            key={i}
                            todoUUID={l.uuid}
                            isComplete ={l.isComplete}
                        />
                    ))
                }
                </List>  
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
  const todoItems = state.newToDoReducer.todoItems;;
 
  return{
    todoItems:todoItems
  };
};

export default connect(mapStateToProps) (ToDoItemList);
//export default ToDoItemList

