import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AppNavigator from './AppNavigator'

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
