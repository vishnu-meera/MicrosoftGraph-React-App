import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fecthCalenderDetails} from'../actions';
import requireAuth from '../components/hoc/requireAuth';
class CalenderEvents extends Component{
    componentDidMount(token){
        this.props.fecthCalenderDetails(token);
    }

    renderUsersList(){
        console.log(this.props.calenderEvents)
        const data = this.props.calenderEvents;
        return <div>
                    {JSON.stringify(data)}
                </div>;
    }

    render(){
        return(
            <div>
                <h3>Events</h3>
                {this.renderUsersList()}
            </div>
        );
    }
}

function loadData(store,token){
    console.log("After login : In CalenderEvents");
    return store.dispatch(fecthCalenderDetails(token));
}

function mapStatetoProps(state) {return {calenderEvents:state.calenderEvents}};

export default {
    component:connect(mapStatetoProps,{fecthCalenderDetails})(requireAuth(CalenderEvents)),
    loadData
};
