import userReducers from './userReducer';
import authReducer from './authReducer';
import calenderEventsReducer from './calenderEventsReducer';
import {combineReducers} from 'redux'


export default combineReducers({
    me:userReducers,
    auth:authReducer,
    calenderEvents:calenderEventsReducer
});