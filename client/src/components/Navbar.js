import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <nav className='flex justify-center'>
            <Link to = "/"> 
                <h3>Home</h3>
            </Link>
            <Link to="/about"> 
                <h3>About</h3>
            </Link>
            {/* <Link to="/beginner"> 
                <h3>Beginner</h3>
            </Link> */}
            <Link to="/login"> 
                <h3>Login</h3>
            </Link>
            <Link to="/profile"> 
                <h3>Profile</h3>
            </Link>
        </nav>
    )
};

export default Navbar;