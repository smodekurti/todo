import React, {Component} from 'react';
import {ScrollView, View, Image, Text,TextInput,TouchableOpacity, StyleSheet, Dimensions, Keyboard} from 'react-native';
import { List, ListItem , CheckBox} from 'react-native-elements'


export default class ToDoItem extends Component{

    constructor(){
        super();
        this.state={
            switched:false,
        }
    }

    render(){
        return(
            <ListItem 
                key={this.props.index}
                title={this.props.title}
                hideChevron={true}
                switchButton
                switched={this.state.switched}
                onSwitch={() => {
                    this.setState({switched:!this.state.switched});
               }}
                containerStyle={Styles.listItem}
                titleStyle={this.state.switched ? Styles.titleComplete : Styles.title}
            />

        )
    }

}


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
            marginTop: 20,
            marginBottom:20,
        },
        title:{
            color: 'white',
            textAlignVertical:'center'
            
        },
        titleComplete:{
            color: '#00b894',
            textDecorationLine: 'line-through',
            fontWeight:'900',
            textDecorationStyle:'solid',
            textDecorationColor:'#2d3436'
        }
    })