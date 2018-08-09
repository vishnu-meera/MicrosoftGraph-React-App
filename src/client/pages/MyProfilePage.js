import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMe} from'../actions';
import requireAuth from '../components/hoc/requireAuth';

class MyProfile extends Component{
    componentDidMount(token){
        this.props.fetchMe(token);
    }

    renderUsersList(){
        console.log(this.props.me)
        const myself = this.props.me;
        return <div>
                    <table className ="striped highlight responsive-table">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{myself.displayName}</td>
                            </tr>
                            <tr>
                                <td>Mail</td>
                                <td>{myself.mail}</td>
                            </tr>
                            <tr>
                                <td>Job Title</td>
                                <td>{myself.jobTitle|| 'Nil'}</td>
                            </tr>
                            <tr>
                                <td>Mobile Phone</td>
                                <td>{myself.mobilePhone || 'Nil'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>;
    }

    render(){
        return(
            <div>
                <h3>My Details</h3>
                {this.renderUsersList()}
            </div>
        );
    }
}

function loadData(store,token){
    console.log("After login : In MyProfilePage");
    return store.dispatch(fetchMe(token));
}

function mapStatetoProps(state) {return {me:state.me}};

export default {
    component:connect(mapStatetoProps,{fetchMe})(requireAuth(MyProfile)),
    loadData
};
