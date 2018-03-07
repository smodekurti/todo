import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import Login from "../components/Login/login";
import NewToDoItem from "../components/NewToDoItem/NewToDoItem";
import Divider from '../components/Divider/divider';

class Home extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
           <NewToDoItem />
           <Divider />
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
    
  }
});

export default Home;
