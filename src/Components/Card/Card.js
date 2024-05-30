import React, { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Card.css";
// import { JobContext } from '../../Context/JobContext';

const Card = (props) => {

    const date = props.applyBy;
    const dateObj = new Date(date);
    // const year = dateObj.getFullYear();
    // const plainDate = dateObj.toLocaleDateString();
    const options = { day: 'numeric', month: 'short' };
const formattedDate = dateObj.toLocaleDateString(undefined, options);
    // console.log(year);


  return (
    <>
    
        <div className="Card-container " key={props.id}>

        { /*   <div className="big-img">
                <img src={props.img} alt="Image"/>
  </div> */}

            <div className="box">
                <div className="row">
                    <h2>{props.title}</h2>
                    <span>{props.country}, {props.state} , {props.city}</span>
                </div>
                <div className='box-content'>
                    <h3>Company : {props.company}</h3>

                    <a target='_blank' className='box' href={props.companyWebsite}>
                    <button className='company-link'>
                    Website
                    </button>
                    </a>

                </div>

                <p>{props.desc.slice(0,350)}...</p>
                <Link to={`/carddetail/${props.id}`}>
                    <button class="card-button">
                        More info
                    </button>
                </Link>
                <p>Apply before : {formattedDate}  (MM/DD) </p>

            {/* <a target='_blank' href={props.apply} className="button">Apply</a> */}

            </div>

        </div>
    </>
  )
}

export default Card