import React, {Component} from 'react';
import {ScrollView, View, Image, Text,TextInput,TouchableOpacity, StyleSheet, Dimensions, Keyboard} from 'react-native';
import { List, ListItem , CheckBox} from 'react-native-elements'
import ToDoItem from './ToDoItem';

const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },   {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
    
    
 
  ]



class ToDoItemList extends Component{

  
    
    render(){
        
         const containerStyles= [Styles.title];
         

        return(
            <ScrollView style={Styles.container} showsVerticalScrollIndicator={false} > 
                <List containerStyle={Styles.list}>
                {
                    list.map((l, i) => (
                        <ToDoItem 
                            index={i}
                            title={l.name}
                            key={i}
                        />
                    ))
                }
                </List>  
            </ScrollView>
        )
    }
}

export default ToDoItemList;

const Styles = StyleSheet.create({
    container: {
        flex:1,
    },
    list:{
       backgroundColor: '#485163',
       borderBottomColor: '#f1f2f6',
       marginBottom: 20
    },
    listItem:{
        marginTop: 10,
        marginBottom:10,
    },
    title:{
        color: 'white',
        
    },
    titleComplete:{
        color: 'white',
        textDecorationLine: 'line-through',
        

    }
})