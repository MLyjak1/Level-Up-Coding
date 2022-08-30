import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <div>
            <Link to = "/Home"> 
                <h3>Home</h3>
            </Link>
            <Link to="/About"> 
            <h3>About</h3>
            </Link>
            <Link to="/Beginner"> 
            <h3>Beginner</h3>
            </Link>
            <Link to="/Login"> 
            <h3>Login</h3>
            </Link>
            <Link to="/Profile"> 
            <h3>Profile</h3>
            </Link>
        </div>
    )
};

export default Navbar;