import React from 'react';
import { Link } from 'react-router-dom';
import Auth from "../utils/auth";

function Navbar () {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
		<nav className="flex justify-center">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			{Auth.loggedIn() ? (
				<>
					<Link to="/profile">Profile</Link>
                    <button onClick={logout}>Logout</button>
				</>
			) : (
				<>
					<Link to="/login">Login</Link>
					<Link to="/signup">Sign Up</Link>
				</>
			)}
		</nav>
	);
};

export default Navbar;