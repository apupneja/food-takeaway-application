import React, { useState } from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from "axios";
import { Redirect } from "react-router-dom";
function AccountIcon(props) {
    // eslint-disable-next-line
    const [loggedOut, setLoggedOut] = useState(false)
    function handleLogOut(){
        axios.get('http://localhost:8080/api/logout',{
            headers : {
                Authorization:localStorage.getItem('token')
            }
        })
        .then(function(response){
            props.applyAccessToken('');
            props.authenticated();
        })
        .catch(function(err){
            console.log(err);
        })
    }
    if (loggedOut) {
        return <Redirect to="/authenticate" />
    }
    return (
        <div className="mobile-authentication-icon" onClick={handleLogOut}><AccountCircleIcon fontSize="large" /></div>)
}

export default AccountIcon;