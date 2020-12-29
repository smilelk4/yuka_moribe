import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <div className="navbar"> 
      <Link to='/'>Home</Link>
      <Link to='/about-me'>About Me</Link>
      <Link to='/skills'>Skills</Link>
      <Link to='/works'>Works</Link>
    </div>
    );
};

export default Navbar;