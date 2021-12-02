import React, { useState } from "react"
import SearchIcon from '@material-ui/icons/Search';
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar(props,{ parentCallback }) {

    const [search, setSearch] = useState();
    function handleSearch(event) {
        const value = event.target.value;
        setSearch(value);
        parentCallback(value);
    }
    function handleClick() {
        props.onChange(search);
    }

    function handleLogOut() {
        axios.get('http://localhost:8080/api/logout', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then(function (response) {
                props.applyAccessToken('');
                localStorage.setItem('username', '');
                props.authenticated();
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    return (<nav className="navbar">
        <ul className="navbar-list">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <li className="logo navbar-list-items">Hungrezy</li>
            </Link>
            <li className="search navbar-list-items" >
                <input onChange={handleSearch} name="search-bar" id="search-bar" placeholder="Search for restaurant, cuisine or a dish" spellCheck="false" />
                <label onClick={handleClick} htmlFor="search-bar"><SearchIcon style={{ color: '#787878' }} /></label>
            </li>
            <li className="authorisation navbar-list-items" onClick={handleLogOut}>Log Out</li>
            {/* <li className="authorisation navbar-list-items"><a href="/authenticate/register">Sign up</a></li> */}
        </ul>

    </nav>)
}


export default Navbar;