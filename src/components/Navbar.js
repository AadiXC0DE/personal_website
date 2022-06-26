import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div class="nav">
        <input type="checkbox" id="nav-check"></input>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <div className="Logo">
            <Link to="/">A</Link>
          </div>
          <Link to="/">Home </Link>
          <Link to="/about">About Me </Link>
          <Link to="/experience">Experience </Link>
          <Link to="/contact">Contact </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
