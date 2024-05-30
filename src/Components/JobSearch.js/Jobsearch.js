import React, { useState, useRef, useContext } from 'react';
import Card from '../Card/Card';
import "./Job.css";
import Error from "../Error/Error"

import { JobContext } from '../../Context/JobContext';
import Loader from '../Loader/Loader';

const Jobsearch = () => {

  const {fetchJobs, loading, error, jobs} = useContext(JobContext);
  // const [query, setQuery] = useState('');

  const [skillQuery, setSkillQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  const [errorPage, setErrorPage ] = useState(false);

  const handleSearch = (e) =>{
    e.preventDefault();
    const query = skillQuery + ' ' + locationQuery;
    fetchJobs(query,null,2023)
    .then(() => {
      if (jobs.length === 0) {
        setErrorPage(true);
      }else{
        setErrorPage(false);
      }
    });
  }




  function NCards(currElem) {
    // console.log(currElem);

    return (
      <Card
        id={currElem.job_id}
        company={currElem.employer_name}
        companyWebsite={currElem.employer_website}
        title={currElem.job_title}
        img={currElem.employer_logo}
        desc={currElem.job_description}
        state={currElem.job_state}
        country={currElem.job_country}
        city={currElem.job_city}
        apply={currElem.job_apply_link}
        applyBy={currElem.job_offer_expiration_datetime_utc}

      />
    );
  }

  

  return (
    <div>
      <h1 className='title'>Job Hunt</h1>

      <div className='job-box'>

      <div className='job-search-box'>
      <input
        className='text-box'
        type="text"
        placeholder="Enter your Skills"
        value={skillQuery}
        onChange={(e) => setSkillQuery(e.target.value)}
      />
      <input
        className='text-box'
        type="text"
        placeholder="Enter your Location"
        value={locationQuery}
        onChange={(e) => setLocationQuery(e.target.value)}
      />
      </div>
      

      <div className='search-button'>
        <button className='btn' type='submit' onClick={handleSearch}>Search</button>
      </div>

      </div>
      
      

      <ul>
        { loading ? (
          <Loader />
        ) 
         : (
          jobs && jobs.map(NCards)
        )
        }    
      </ul>

    </div>
  );

  
};

export default Jobsearch;


// // <input
// // type="text"
// // placeholder="Enter desired Location"
// // value={query}
// // onChange={(e) => setQuery(e.target.value)}
// // />