import {FETCH_ME} from '../actions';

export default (state ={},action)=>{
    switch (action.type) {
        case FETCH_ME:
            return action.payload.data;
        default:
            return state;
    }
}