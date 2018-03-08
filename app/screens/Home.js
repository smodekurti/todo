import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Dimensions
} from "react-native";
import Login from "../components/Login/login";
import NewToDoItem from "../components/NewToDoItem/NewToDoItem";
import Divider from '../components/Divider/divider';
import ToDoItem from '../components/ToDoItem/ToDoItem';

class Home extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
           <NewToDoItem />
      
           <ToDoItem />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#485163",
    alignItems: "center",
    justifyContent: 'center',
    //width: Dimensions.get('window').width-10
    //marginLeft:
    
  }
});

export default Home;
