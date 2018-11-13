import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class CreateRoom extends Component {
  state = {
    eventName: "",
    eventCode: ""
  };

  eventNameChangedHandler = val => {
  	console.log("in e name handler")
    this.setState({
      eventName: val
    });
  };

  eventCodeChangedHandler = val => {
    this.setState({
      eventCode: val
    });
  };

  eventSubmitHandler = () => {
    if (this.state.eventName.trim() === "") {
      return;
    }

  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            placeholder="A dope event"
            value={this.state.eventName}
            onChangeText={this.eventNameChangedHandler}
            style={styles.input}
          />

          <TextInput
            placeholder="Access code"
            value={this.state.eventCode}
            onChangeText={this.eventCodeChangedHandler}
            style={styles.input}
          />
        </View>

				<View>
					<Button
					  title="Create Event"
					  style={styles.eventButton}
					  onPress={this.eventSubmitHandler}
					/>
				</View>

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
  input: {
  	marginBottom: 30,
    textAlign: 'left'
  }
});

export default CreateRoom;