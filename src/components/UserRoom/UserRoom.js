import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class HomePage extends Component {
  static navigationOptions = {
    title: '',
  };
  render() {
    console.log("room props = ", this.props)
    return (
      <View style={styles.container}>
        <Text>Welcome to the room of {this.props.roomName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 150,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default HomePage;
