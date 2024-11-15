import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-logo">PixelCrayons™</Link>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/join-us">Join Us</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact" className="contact-button">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
