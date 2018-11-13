import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";

class HomePage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Button title="Host Room" onPress={() => console.log("Host pressed")}/>
        <Button title="Join Room" onPress={() => console.log("Join pressed")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 150,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default HomePage;
