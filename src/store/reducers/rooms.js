import {
  ADD_ROOM,
} from "../actions/actionTypes";

const initialState = {
  rooms: [{name: "r1", code: "abc", key: '.0835'}]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROOM:
      console.log("in add room reducer and state = ", state, "action = ", action)

      return {
        ...state,
        rooms: state.rooms.concat({
          name: action.roomName,
          code: action.roomCode,
          key: action.key
        })
      };
    default:
      return state;
  }
};

export default reducer;
