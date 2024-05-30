import React from 'react';
import "./Loader.css";

const Loader = () => {
  return (
    <div className='load'>
    <div className='loading'>
      <svg viewBox="25 25 50 50">
        <circle className='circle' r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
    </div>
  )
}

export default Loader