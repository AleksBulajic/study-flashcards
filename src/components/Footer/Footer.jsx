import React from 'react';
import './Footer.css';
import Cover from "../../assets/cover.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 StudyHub. All rights reserved.</p>
        
      </div>
      {/* <img src={Cover} className="footer-png" alt="cover-img" /> */}
    </footer>
  );
}

export default Footer;
