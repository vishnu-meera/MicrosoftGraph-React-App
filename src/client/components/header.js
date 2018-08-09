import React from 'react';  
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Header = (auth) =>{
    console.log('my auth status is',auth.auth);
    const authButton = auth.auth ?(
        <a href ="/logout">Logout</a>
    ):(
        <a href = "/tokenForGraph">Login</a>
    );

    return (
        <nav>
         <div className="nav-wrapper">
            <a href="/" className="brand-logo">DashBoard</a>
            <ul className="right"> 
                <li><a href="/ggggg">About Me</a></li>
                <li><a href="/hhhhhh">My Calender Notifications</a></li>
                <li>{authButton}</li>
            </ul>
        </div>
        </nav>
    );
}

function mapStateToProps({auth}){
    return {auth}
}


export default connect(mapStateToProps)(Header)