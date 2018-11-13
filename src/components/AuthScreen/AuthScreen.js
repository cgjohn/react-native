import React, { Component } from "react";
import { View, Button, StyleSheet, Text, Dimensions } from "react-native";

class AuthScreen extends Component {

  authHandler = () => {
    this.props.navigation.navigate("CreateRoom")
  }

  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.text}>In order to be a host you must have a spotify account</Text>
        <Button title="Authenticate Spotify" onPress={this.authHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    justifyContent: 'center'
  },
  text: {
  	textAlign: 'center',
  	marginBottom: 30,
  	fontSize: 24
  }
});

export default AuthScreen;
