import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CgClose } from "react-icons/cg";
import { CgMenu } from "react-icons/cg";

import "./Nav.css";

const NavBar = () => {

    const navRef = useRef();
    const headerRef = useRef();
  // whenever this function is call the class "reponsive-nav" 
  // will add or remove

  const closeNavBar = () => {
    navRef.current.classList.remove("reponsive-nav");
  }

  const showNavBar = () => {
    navRef.current.classList.toggle("reponsive-nav");    
  }

  return (

    <header>
    <h3 className='title'>Job Hunt</h3>
    <nav ref={navRef}>

      <NavLink className="navlink" to="/" onClick={closeNavBar}>
      Home
      </NavLink>

      <NavLink className="navlink" to="/about" onClick={closeNavBar}>
      About Us
      </NavLink>

      <NavLink className="navlink" to="/contact" onClick={closeNavBar}>
      Contact Us
      </NavLink>

      <NavLink className="navlink" to="/jobsearch" onClick={closeNavBar}>
      Jobs
      </NavLink>

      <button className="nav-btn nav-close-btn" onClick={showNavBar}>
        <CgClose />
      </button>
    </nav>
    <button className="nav-btn" onClick={showNavBar}>
      <CgMenu />
    </button>
  </header>

  )

}

export default NavBar;