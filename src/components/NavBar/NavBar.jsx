import React from "react";
import "./NavBar.css"
import Cover from "../../assets/cover.png"

function NavBar() {
  return (
    <div className="nav-container">
      <img src={Cover} className="navbar-png" alt="cover-img"/>
    </div>
  );
}

export default NavBar;
