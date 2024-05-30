import React from 'react';
import {NavLink} from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs";
import "./Home.css";

const Home = () => {
  return (
    <div className='home-container'>

  <div className='home-content'>

    <div className='home-image'>
      <img src="https://www.gempool.ie/images/uploads/frustrated_at_work.jpg" alt="Frustrated at work" />
    </div>

    <div className='home-page'>
      <h3>Frustrated with the traditional job search process?</h3>
      <h4>Want to find a job that matches your location and skills?</h4>

      <div className='home-call-to-action'>
        <h5>Find your dream job in just a few clicks</h5>
      </div>

      <div className='home-button'>
        <NavLink to='/jobsearch'>

          <button class="cta">
            <span>Get Started</span>
            <BsArrowLeft/>
          </button>

        </NavLink>
      </div>

      </div>
    </div>
  </div>

  )
}

export default Home


// <div className='home-container'>

//       <div className='home-image'>
//             <img src="https://www.gempool.ie/images/uploads/frustrated_at_work.jpg"  />
//       </div> 

//       <div className='home-page'>
//         <h3>Frustrated with the traditional job search process?</h3>
//         <h3>Want to find a job that matches your loaction and skills ?</h3>
//       </div>

//       <div className='home-call-to-action'>
//         <h5>Find your dream job in just a few clicks</h5>
//       </div>

//       <div className='home-button'>
//         <NavLink to='/jobsearch'>
//           <button class="cta">
//             <span>Get Started</span>
//             <BsArrowLeft/>
//           </button>
//         </NavLink>
//       </div>


//     </div>