import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="footer-section">
          <p>Designed and Coded by @Ved</p>
          {/* 
          <p>
            @{new Date().getFullYear()} © CopyRights Reserved
          </p> 
      */}
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

// <div className="footer-col">
// <h4>Follow Us</h4>
// <div className="social-links">
//   <a href="#">
//     <FaInstagram />
//   </a>
//   <a href="#">
//     <FaFacebookSquare />
//   </a>
//   <a href="#">
//     <FaTwitterSquare />
//   </a>
//   <a href="#">
//     <FaLinkedin />
//   </a>
// </div>
// </div>
