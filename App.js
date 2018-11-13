import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AppNavigator from './AppNavigator'

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import HomePage from "./src/components/HomePage/HomePage";
import AuthScreen from "./src/components/AuthScreen/AuthScreen";
import CreateRoom from "./src/components/CreateRoom/CreateRoom";
import JoinRoom from "./src/components/JoinRoom/JoinRoom";


export default class App extends Component {

  render() {
    return (
     <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
