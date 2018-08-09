import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export default ChildComponent=>{
    class RequireAuth extends Component{
        render(){
            console.log("this.props.auth",this.props.auth)
            switch (this.props.auth) {
                case false:
                    return <Redirect to="/"/>
                case null:
                    return <div>Loading...</div>
                default:
                    return <ChildComponent {...this.props}/>
            }
        }
    }

    function mapStateToProps({auth}){
        return {auth};
    }

    return connect(mapStateToProps)(RequireAuth);
};