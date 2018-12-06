import { combineReducers } from 'redux';
import authReducer from './authReducer'
import socket from './socketReducer'
const rootReducer = combineReducers({
    auth: authReducer,
    socket
});

export default rootReducer;