import axios from 'axios';
import request from 'async-request'
export const FETCH_ME = 'fetch_me';
export const FETCH_CURRENT_USER = 'fecth_current_user';
export const FETCH_CALENDER_EVENTS = 'fetch_calender_events';

export const fetchMe = (token)=> async (dispatch,getState,api)=>{
    //console.log("Authorization bearer token",token)
    let res = {};
    if(token){
        const headers = { 'Authorization': `Bearer ${token}`}
        res = await axios.get('https://graph.microsoft.com/v1.0/me/',{headers})
        //console.log("data : ",res.data)
        //console.log(api)
        //const res = await api.get('/me');
        dispatch({
            type:FETCH_ME,
            payload:res
        })
    }
};

export const fecthCurrentUser = (token)=> async (dispatch,getState,api)=>{
    console.log("Authorization bearer token",token)
    let res = {};
    if(token){
        const headers = { 'Authorization': `Bearer ${token}`}
        res = await axios.get('https://graph.microsoft.com/v1.0/me/',{headers})
        //console.log("data : ",res.data)
        //console.log(api)
        //const res = await api.get('/me');
    }
    dispatch({
        type:FETCH_CURRENT_USER,
        payload:res
    })
};

export const fecthCalenderDetails = (token)=> async (dispatch,getState,api)=>{
    console.log("Authorization bearer token",token)
    let res = {};
    if(token){
        const headers = { 'Authorization': `Bearer ${token}`}
        console.log("headers : ",headers)
        try{
            //res = await axios.get('https://graph.microsoft.com/v1.0/me/events',{headers})
            res = await request('https://graph.microsoft.com/v1.0/me/events', {
                method: 'GET',
                headers: headers
            });
            console.log(res)
        }catch(error){
            console.log("fecthCalenderDetails: ", JSON.stringify(error))
            res = error.Error
        }
        //console.log("data : ",res.data)
        //console.log(api)
        //const res = await api.get('/me');
    }
    dispatch({
        type:FETCH_CALENDER_EVENTS,
        payload:res
    })
};