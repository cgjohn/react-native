import React, {Component} from "react";
import { 
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Button
} from "react-native";

class ListItem extends Component {
  state = {
    modalVisible: false,
    code: "",
    invalid: false
  }

  handleClick = () => {
    console.log("clicked")
    this.setState(prevState => ({
      modalVisible: true
    }));
    console.log('state after click = ', this.state)
  }

  joinRoomHandler = (code) => {
    if(this.state.code.toLowerCase() === this.props.roomCode.toLowerCase()){
      // console.log("nav obj = ", this.props.navigation)
      this.props.navigation.navigate('UserRoom', {
        itemId: this.props.roomCode,
        otherParam: {
          roomName: this.props.roomName
        },
      });
    }
    else {
      this.setState({
        invalid: true
      })
    }
    this.setState({
      modalVisible: false
    })
  }

  inputHandler = val => {
    this.setState({
      code: val
    });
    if(this.state.invalid){
      this.setState({
        invalid: false
      })
    }
  };

  render() { 
    let invalidText = null
    if(this.state.invalid){
      invalidText = <Text style={styles.invalidText}> Wrong group code! </Text>
    } 
    console.log('this.state = ', this.state)

    return (
      <TouchableOpacity style={styles.listItem} onPress={this.handleClick}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          presentationStyle="overFullScreen">
          <View style={styles.modal}>
            <View>
              <TextInput
                placeholder="Access code"
                value={this.state.code}
                onChangeText={this.inputHandler}
                style={styles.input}
              />

              <View>
                <Button
                  title="Join Room"
                  style={styles.eventButton}
                  onPress={this.joinRoomHandler}
                />
              </View>

              <TouchableHighlight
                onPress={() => {
                  this.setState({modalVisible: false});
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <View>
          <Text style={{fontSize: 24, textAlign: 'center'}}>{this.props.roomName}</Text>
          {invalidText}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: "100%",
    height: 50,
    backgroundColor: "#eee"
  },
  listItemOpen: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
    width: "100%",
    height: 50,
    backgroundColor: "#eee"
  },
  input: {
    width: '40%'
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    padding: 100
 },
 invalidText: {
    color: '#ff5c33',
    fontSize: 16
 }
});

export default ListItem;
