import {createStore,applyMiddleware} from 'redux';
import thunk  from 'redux-thunk';
import reducers from '../client/reducers';
import axios from 'axios';

export default (req)=>{
    const cookie = req.session.bearetToken || ' ';
    //console.log("cookie ", cookie)
    const axiosInstance = axios.create({
        baseURL:'https://graph.microsoft.com/v1.0',
        headers : { 'Authorization': `Bearer ${cookie}`}
    });

    const store = createStore(reducers,
                        {},
                        applyMiddleware(thunk.withExtraArgument(axiosInstance))
                    );
    return store;
}