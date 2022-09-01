import React from 'react';
import { Link } from 'react-router-dom';
import Auth from "../utils/auth";

// import "./Navbar.css";

function Navbar () {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
		<div className = "bannerbox">
            <nav className="navbar">
			<Link to="/" className="home">Home</Link>
			<div class="dropdown">
				<button class="dropbtn">Courses
					<i class="fa fa-caret-down"></i>
				</button>
				<div class="dropdown-content">
					<Link to="/beginner" className="beginner">Beginner</Link>
					<Link to="/intermediate" className="intermediate">Intermediate</Link>
					<Link to="/advanced" className="advanced">Advanced</Link>
				</div>
			</div>
			<Link to="/about" className="about">About</Link>
			{Auth.loggedIn() ? (
				<>
					<Link to="/profile" className="profile">Profile</Link>
                    <button onClick={logout}>Logout</button>
				</>
			) : (
				<>
					<Link to="/login" className="profile">Login</Link>
					<Link to="/signup" className="profile">Sign Up</Link>
				</>
			)}
		</nav>
        </div>
	);
};

export default Navbar;