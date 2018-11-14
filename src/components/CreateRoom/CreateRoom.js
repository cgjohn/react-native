import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { connect } from 'react-redux'
import { addRoom } from '../../store/actions/index'

class CreateRoom extends Component {
  state = {
    eventName: "",
    eventCode: "",
    eventKey: toString(Math.random())
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

  addRoomHandler = () => {
    this.props.onAddRoom(this.state.eventName, this.state.eventCode, this.state.eventKey)
    this.props.navigation.navigate('Player')
  }

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
					  title="Create Room"
					  style={styles.eventButton}
					  onPress={this.addRoomHandler}
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

const mapDispatchToProps = dispatch => {
  return {
    onAddRoom: (name, code, key) => dispatch(addRoom(name, code, key)),
  };
};

export default connect(null, mapDispatchToProps)(CreateRoom);