import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import Auth from "../utils/auth";

// import "./Navbar.css";
export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
	const logout = (event) => {
		        event.preventDefault();
		        Auth.logout();
	};
    return (
		<nav className="bannerbox w-full bg-white shadow">
            <div className="navbar justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-2xl">Level Up Coding</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="home ">
                                <a href="/">Home</a>
                            </li>
                            <li className="">
							<div className="dropdown">
					<button className="dropbtn courses">Courses
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="dropdown-content">
						<Link to="/beginner" className="beginner">Beginner</Link>
						<Link to="/intermediate" className="intermediate">Intermediate</Link>
						<Link to="/advanced" className="advanced">Advanced</Link>
					</div>
				</div>
                            </li>
                            <li className="about">
                                <a href="/about">About</a>
                            </li>
                            <li className="">
							{Auth.loggedIn() ? (
							<>
								<Link to="/profile" className="profile">Profile</Link>
								<button className="profile" onClick={logout}>Logout</button>
							</>
						) : (
							<>
								<Link to="/login" className="profile">Login</Link>
								<Link to="/signup" className="profile">Sign Up</Link>
							</>
						)}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
// function Navbar () {
//     const logout = (event) => {
//         event.preventDefault();
//         Auth.logout();
//     };
//     return (
// 		<div className = "bannerbox">
//             <nav className="navbar container px-4 md:px-0 h-full mx-auto flex justify-between items-center">
// 			<ul id="menu" className="hidden fixed top-0 right-0 px-10 py-16 bg-gray-800 z-50
//                 md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6">

//                 <li className="md:hidden z-90 fixed top-4 right-6">
//                     <a href="javascript:void(0)" className="text-right text-4xl"
//                         onclick="toggleMenu()">&times;</a>
//                 </li>

//                 <li>
//                     <a className="duration-300" href="/">Home</a>
//                 </li>
//                 <li>
// 				<div className="dropdown">
// 					<button className="dropbtn">Courses
// 						<i className="fa fa-caret-down"></i>
// 					</button>
// 					<div className="dropdown-content">
// 						<Link to="/beginner" className="beginner">Beginner</Link>
// 						<Link to="/intermediate" className="intermediate">Intermediate</Link>
// 						<Link to="/advanced" className="advanced">Advanced</Link>
// 					</div>
// 				</div>
//                 </li>
//                 <li>
//                     <a className="duration-300" href="#">About</a>
//                 </li>
//                 <li>
//                     <a className="duration-300" href="#">Profile</a>
//                 </li>
// 				<li>
// 				{Auth.loggedIn() ? (
// 					<>
// 						<Link to="/profile" className="profile">Profile</Link>
// 						<button onClick={logout}>Logout</button>
// 					</>
// 				) : (
// 					<>
// 						<Link to="/login" className="profile">Login</Link>
// 						<Link to="/signup" className="profile">Sign Up</Link>
// 					</>
// 				)}
// 				</li>
//             </ul>
//             <div className="flex items-center md:hidden">
//                 <button className="text-4xl font-bold duration-300"
//                     onclick="toggleMenu()">
//                     &#9776;
//                 </button>
//             </div>
// 			const menu = document.getElementById('menu');
// 				function toggleMenu() {
// 					menu.classList.toggle('hidden');
// 					menu.classList.toggle('w-full');
// 					menu.classList.toggle('h-screen');
// 				};
			{/* function hburger () { */}
				
			{/* }; */}

				{/* <Link to="/" className="home">Home</Link>
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
				<Link to="/about" className="about">About</Link> */}
				{/* c */}
// 			</nav>
//         </div>
// 	);
// };

// export default Navbar;