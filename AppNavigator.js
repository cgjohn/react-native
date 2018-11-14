import { createStackNavigator } from 'react-navigation';

import HomePage from './src/components/HomePage/HomePage';
import AuthScreen from "./src/components/AuthScreen/AuthScreen";
import CreateRoom from "./src/components/CreateRoom/CreateRoom";
import JoinRoom from "./src/components/JoinRoom/JoinRoom";
import Player from "./src/components/Player/Player";
import RoomList from "./src/components/RoomList/RoomList";
import UserRoom from "./src/components/UserRoom/UserRoom";
import ListItem from "./src/components/RoomList/ListItem/ListItem";


const AppNavigator = createStackNavigator({
  HomePage: { screen: HomePage },
  AuthScreen: {screen: AuthScreen},
  CreateRoom: {screen: CreateRoom},
  JoinRoom: {screen: JoinRoom},
  Player: {screen: Player},
	RoomList: {screen: RoomList},  
	UserRoom: {screen: UserRoom},
	ListItem: {screen: ListItem},
});

export default AppNavigator;