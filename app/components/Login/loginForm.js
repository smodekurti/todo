import React, {Component} from 'react';
import {View, Image, Text,TextInput,TouchableOpacity, StyleSheet, Dimensions, Keyboard} from 'react-native';

class LoginForm extends Component{
    render(){
        return(
            <View style={Styles.container}>
                <TextInput style={Styles.input} 
                placeholder="username or email"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType='email-address'
               />
                <TextInput style={Styles.input} placeholder="password" secureTextEntry/>
                <TouchableOpacity style={Styles.buttonContainer} >
                    <Text style={Styles.text}> LOGIN </Text>

                </TouchableOpacity>
            </View>
        )
    }
}

export default LoginForm;

const Styles = StyleSheet.create({
    container : {
        padding:20
    },
    input:{
        height:60,
        width:Dimensions.get('window').width-40,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginBottom:15,
        paddingHorizontal:10,
        fontSize:24,
        color: '#2980b9',
        borderRadius:10
    },
    buttonContainer:{
        width:Dimensions.get('window').width-40,
        backgroundColor: '#3498db',
        alignItems:'center',
        justifyContent: 'center',
        paddingVertical:20,
        marginBottom:30,
        height:50
    },
    text:{
       fontSize:18,
       fontWeight: '700',
       color : 'white',
       textAlign: 'center',
       
    }
});