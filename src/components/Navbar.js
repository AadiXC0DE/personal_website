import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <input type="checkbox" id="nav-check"></input>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <div className="Logo">
            <Link to="/">A</Link>
          </div>
          <Link to="/">Home </Link>
          <Link to="/about">About Me </Link>
          <Link to="/experience">Experience </Link>
          <Link to="/contact">Contact </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
