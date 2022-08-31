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
			<Link to="/">
				<h3>Home</h3>
			</Link>
			<Link to="/about">
				<h3>About</h3>
			</Link>
			{Auth.loggedIn() ? (
				<>
					<Link to="/profile">Profile</Link>
				</>
			) : (
				<>
					<Link to="/login">Login</Link>
					<Link to="/signup">Signup</Link>
				</>
			)}
			{/* <Link to="/login">
				<h3>Login</h3>
			</Link>
			<Link to="/profile">
				<h3>Profile</h3>
			</Link> */}
		</nav>
	);
};

export default Navbar;