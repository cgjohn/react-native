import { ADD_ROOM } from './actionTypes';

export const addRoom = (name, code, key) => {
	console.log("in add room action")
    return {
        type: 'ADD_ROOM',
        roomName: name,
        roomCode: code,
        roomId: key
    };
};