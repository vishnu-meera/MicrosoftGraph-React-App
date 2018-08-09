import React from 'react'
import {renderRoutes} from 'react-router-config'
import Header from './components/header';
import {fecthCurrentUser} from './actions';

const App = ({route})=>{
    return <div>
        <Header/>
        {renderRoutes(route.routes)}
    </div>
}

function loadData(store,token){
    console.log("In fecthCurrentUser");
    return store.dispatch(fecthCurrentUser(token));
}


export default {
    component:App,
    loadData
};