import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Cover from "../../assets/cover.png";

function NavBar() {
  return (
    <div className="nav-container">
      <Link to="/" className="nav-link">
        <img src={Cover} className="navbar-png" alt="cover-img" />
      </Link>
      <div className="nav-text">
        <Link to="/source" className="nav-link">
          <p className="source">Resource</p>
        </Link>
        <Link to="/about" className="nav-link">
          <p className="about">About</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
