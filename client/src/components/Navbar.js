import React from 'react';

const Navbar = ({ handlePageChange, currentPage}) => {
    return (
        <div>
            <a href="#Home" 
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                Home
            </a>
            <a href="#About" 
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                About
            </a>
            <a href="#Courses" 
            onClick={() => handlePageChange('Courses')}
            className={currentPage === 'Courses' ? 'nav-link active' : 'nav-link'}>
                Courses
            </a>
            <a href="#Login" 
            onClick={() => handlePageChange('Login')}
            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}>
                Login
            </a>
            <a href="#Profile" 
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}>
                Profile
            </a>





        </div>
    )
};

export default Navbar;