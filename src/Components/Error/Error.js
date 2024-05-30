import React from 'react';
import "./Error.css";
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <>
    <div className='error-page'>
      <div className='content'>
        <h1>404</h1>
        <h4>Opps ! Jobs not found</h4>
        <p>
        Sorry, no jobs found for the entered query. Please try again with different skills or location.
        </p>
        <div className='btns'>
        {/*  <NavLink to="/jobsearch">
            <button>Return</button>
  </NavLink> */}

          <NavLink to="/contact">
            <button><h5>Contact Us</h5></button>
          </NavLink>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Error