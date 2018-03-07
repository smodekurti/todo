import React, {Component} from 'react';
import {View, Image, TextInput,TouchableOpacity, StyleSheet} from 'react-native';
import LoginForm from './loginForm';

class Login extends Component{
    render(){
        return(
            <View style={Styles.container}>
                <View style={Styles.logoContainer}>
                   <Image
                        style={Styles.logo} 
                        source={require('./images/github-logo.png')} 
                        resizeMode="contain" />
                </View>

                <View style={Styles.formContainer}>
                    <LoginForm />

                </View>


            </View>
        )
    }
}

export default Login;

const Styles = StyleSheet.create({
    container:{
        flex:1
    },
    logoContainer:{
        flexGrow:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width:200,
        height:200
    }
});