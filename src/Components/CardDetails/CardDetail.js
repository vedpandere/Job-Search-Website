import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./CardDetail.css";
import { useParams } from "react-router-dom";
import { JobContext } from "../../Context/JobContext";

const CardDetail = () => {
    const {id} = useParams();
    const {fetchJobs, loading, error, jobs} = useContext(JobContext);
    // console.log("Jobees",jobs);
    
    useEffect (() => {
        fetchJobs('', id);
    },[id]);
    const job = jobs.find(job => job.job_id === id); 
    // console.log("Jobs",job);
    

    const dateStr = job.job_offer_expiration_datetime_utc;
    
    const dateObj = new Date(dateStr);
    // const year = dateObj.getFullYear();
    // const plainDate = dateObj.toLocaleDateString();
    const options = { day: 'numeric', month: 'short' };
    const formattedDate = dateObj.toLocaleDateString(undefined, options);
    // console.log(plainDate);

    const jobPosted = job.job_posted_at_datetime_utc;
    const jobPostedDate = new Date(jobPosted);
    const plainDate = jobPostedDate.toLocaleDateString();
    // const op = {da}
  
    // const salary = 10000;
    

  return (
    <>
    <div className="cardDetail">
      <div className="card-container" >

      <div className="card-box">

        <div className="box-img">
            <img src={job.employer_logo ? job.employer_logo : "https://cdn.dribbble.com/users/2112713/screenshots/4268636/media/668603ccc9f1b83344dc765d55f6feb7.jpg?compress=1&resize=400x300"} alt="image"/>
        </div>

        <div className="card-box-content">
            <h4>Title : {job.job_title}</h4>
            <p>Company Name : {job.employer_name}</p>
            <p>Company Type :{job.employer_company_type}</p>
            <p>Job Type : {job.job_employment_type ? job.job_employment_type : "Not Provided" }</p>
            <p>Location : {job.job_country}, {job.job_state} ,{job.job_city}</p>
            <p>Job Posted On : {plainDate} (MM/DD/YY)</p>
            <p>Apply before : {formattedDate} (MM/DD) </p>
           {/* <p>Expected Salary : {salary ? salary + " Rs" : "Not Metioned" } </p> */}
              <a target="_blank" href={job.employer_website}>
                <button className='company-link'>
                Website
                </button>
              </a>
        </div>

      </div>

      <div className="card-description">
        <p>
          {job.job_description}
        </p>
      </div>

      <button>
        <a target='_blank' href={job.job_apply_link} className="apply-button">Apply</a>
      </button>

    </div>
  </div>
    </>
  )
}

export default CardDetail