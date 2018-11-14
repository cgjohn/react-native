import React, { Component } from "react";
import { connect } from 'react-redux'
import { FlatList, Button, StyleSheet, Text } from "react-native";
import ListItem from './ListItem/ListItem'

class RoomList extends Component {
  static navigationOptions = {
    title: 'Open Rooms',
  };
  render() {
    return (
      <FlatList
        style={styles.listContainer}
        data={this.props.rooms}
        renderItem={(info) => (
          <ListItem
            roomName={info.item.name}
            roomCode={info.item.code}
            navigation={this.props.navigation}

          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

const mapStateToProps = state => {
  return {
    rooms: state.rooms.rooms
  };
};

export default connect(mapStateToProps)(RoomList);
