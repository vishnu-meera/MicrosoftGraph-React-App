import {FETCH_CALENDER_EVENTS} from '../actions';

export default (state = null,action)=>{
    switch (action.type) {
        case FETCH_CALENDER_EVENTS:
            return action.payload.data;
        default:
            return state;
    }
}