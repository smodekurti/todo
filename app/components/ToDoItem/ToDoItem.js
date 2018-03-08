import React, {Component} from 'react';
import {ScrollView, Image, Text,TextInput,TouchableOpacity, StyleSheet, Dimensions, Keyboard} from 'react-native';
import { List, ListItem } from 'react-native-elements'

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

class ToDoItem extends Component{
    render(){
        return(
            <ScrollView contentContainerStyle={Styles.container} showsVerticalScrollIndicator={false} overScrollMode='never'> 
                <List containerStyle={Styles.list}>
                {
                    list.map((l, i) => (
                    <ListItem 
                        key={i}
                        title={l.name}
                        containerStyle={Styles.listItem}
                        titleStyle={Styles.title}
                    />
                    ))
                }
                </List>  
            </ScrollView>
        )
    }
}

export default ToDoItem;

const Styles = StyleSheet.create({
    container: {
        flex:1,
        height:40,
    },
    list:{
       backgroundColor: '#485163',
       borderBottomColor: '#f1f2f6'
    },
    listItem:{
        marginTop: 25,
        marginBottom:25,
        
    },
    title:{
        color: 'white'
    }
})