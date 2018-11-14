import { createStore, combineReducers } from 'redux';

import roomsReducer from './reducers/rooms';

const rootReducer = combineReducers({
    rooms: roomsReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;