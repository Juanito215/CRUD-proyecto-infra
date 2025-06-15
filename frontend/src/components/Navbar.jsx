import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>StudentHub</h1>
      <button className="login-btn" onClick={() => window.location.href = "/login"}>
        Login
      </button>
    </nav>
  );
};

export default Navbar;
