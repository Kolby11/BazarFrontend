import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/navbar.css"

const Navbar = () => {
  const sessionStr = localStorage.getItem("sessionStr");
  const isLoggedIn = sessionStr !== null;

  return (
    <nav>
      <Link to="/" className='link'>Home</Link>

      {isLoggedIn ? (
        <Link to="/profile/" className='link'>Profile</Link>
      ) : (
        <Link to="/login/" className='link'>Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
