import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Cover from "../../assets/cover.png";

function NavBar() {
  return (
    <div className="nav-container">
      <img src={Cover} className="navbar-png" alt="cover-img" />
      <div className="nav-text">
        <p className="source">Source</p>
        <p className="about">About</p>
      </div>
    </div>
  );
}

export default NavBar;
