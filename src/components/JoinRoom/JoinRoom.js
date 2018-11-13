import React, { Component } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";

class JoinRoom extends Component {
  state = {
    eventCode: ""
  };
  eventCodeChangedHandler = val => {
    this.setState({
      eventCode: val
    });
  };

  joinRoomHandler = () => {
    if (this.state.eventCode.trim() === "") {
      return;
    }
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <View style={styles.codeContainer}>
          <Text style={styles.text}>Enter the code of the room you want to join</Text>
          <TextInput
            placeholder="Room code"
            value={this.state.eventCode}
            onChangeText={this.eventCodeChangedHandler}
            style={styles.input}
          />
        </View>
				<Button
				  title="Join Room"
				  style={styles.eventButton}
				  onPress={this.joinRoomHandler}
				/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  codeContainer: {
    alignItems: 'center'
  },
  text: {
    marginBottom: 30,
    fontSize: 16,
    marginRight: '15%',
    marginLeft: '15%',
    textAlign: 'center'
  },
  input: {
  	marginBottom: 30,
  }
});

export default JoinRoom;