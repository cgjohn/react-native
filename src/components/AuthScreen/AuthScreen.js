/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator, TouchableHighlight} from 'react-native';
import Spotify from 'rn-spotify-sdk';


type Props = {};
export default class AuthScreen extends Component<Props> {

  constructor()
  {
    super();

    this.state = {spotifyInitialized: false};
    this.spotifyLoginButtonWasPressed = this.spotifyLoginButtonWasPressed.bind(this);
  }

  goToPlayer()
  {
    this.props.navigation.navigate("CreateRoom")
  }

  componentDidMount()
  {
    // initialize Spotify if it hasn't been initialized yet
    console.log("this.state at component did mount = ", this.state)
    Spotify.isInitializedAsync().then((init) => {
      console.log("init = ", init)
      if(!init){
        // initialize spotify
        var spotifyOptions = {
          "clientID":"5038bdc802354d5db6846c4b58698046",
          "sessionUserDefaultsKey":"SpotifySession",
          "redirectURL":"spotifyqueue://auth",
          "scopes":["user-read-private", "playlist-read", "playlist-read-private", "streaming"],
        };
        Spotify.initialize(spotifyOptions).then((loggedIn) => {
          // update UI state
          this.setState({spotifyInitialized: true});
          // handle initialization
          console.log("loggedIn in initialize = ", loggedIn)
          if(loggedIn)
          {
            this.goToPlayer();
          }
        }).catch((error) => {
          console.log(error.message)
        });
      }
      else
      {
        // update UI state
        this.setState((state) => {
          state.spotifyInitialized = true;
          return state;
        });
        // handle logged in
        Spotify.isLoggedInAsync().then(isLoggedIn =>{
          if(isLoggedIn){
            this.goToPlayer()
          }
        })
      }
    })
  }

  spotifyLoginButtonWasPressed()
  {
    console.log("login button was pressed")
    // log into Spotify
    Spotify.login().then((loggedIn) => {
      console.log("login promise loggedIn = ", loggedIn)
      if(loggedIn)
      {
        // logged in
        console.log("logged in is true")
        this.goToPlayer()
        Spotify.getAuthAsync().then(authInfo => {
          console.log("AuthInfo = ", authInfo)

        })
      }
      else
      {
        console.log("login was cancelled")
        // cancelled
      }
    }).catch((error) => {
      // error
      console.log("had an error")
      console.log(error)
    });
  }

  render()
  {
    if(!this.state.spotifyInitialized)
    {
      return (
        <View style={styles.container}>
          <Text style={styles.loadMessage}>
            Loading...
          </Text>
        </View>
      );
    }
    else
    {
      return (
        <View style={styles.container}>
          <Text style={styles.greeting}>
            In order to host a room you must login to your spotify
          </Text>
          <TouchableHighlight onPress={this.spotifyLoginButtonWasPressed} style={styles.spotifyLoginButton}>
            <Text style={styles.spotifyLoginButtonText}>Log into Spotify</Text>
          </TouchableHighlight>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  loadIndicator: {
    //
  },
  loadMessage: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  spotifyLoginButton: {
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: 'green',
    overflow: 'hidden',
    width: 200,
    height: 40,
    margin: 20,
  },
  spotifyLoginButtonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },

  greeting: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
