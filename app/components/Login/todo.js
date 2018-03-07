import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Dimensions, Text} from 'react-native';


class ToDo extends Component {
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

export default ToDo;

const Styles = StyleSheet.create({
        container:{
            flexDirection: 'row',           
            marginTop:80,
            justifyContent: 'center',
            alignItems:'center'
            
        },
        input:{
            height:60,
            width:'70%',
            backgroundColor: 'rgba(255,255,255,0.5)',
            marginBottom:15,
            paddingHorizontal:10,
            fontSize:24,
            color: '#2980b9',
            borderRadius:5
            

        },
        buttonContainer:{
            height:60,
            width:80,
            backgroundColor: '#3498db',
            alignItems:'center',
            justifyContent: 'center',        
            marginLeft:15,
            marginBottom:15,
            borderRadius:5
            
        },
        text:{
           fontSize:16,
           fontWeight: '700',
           color : 'white',
           textAlign: 'center',
           
        }

    }
)