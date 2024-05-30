import { createContext , useState, useEffect } from "react";
import axios from "axios";

// import dotenv from 'dotenv';

// // Load environment variables from .env file
// dotenv.config();


const JobContext = createContext();

const JobContextProvider = ({children}) => {
    
    //   const [query, setQuery] = useState('');
      const [jobs, setJobs] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
    //   const [jobData, setJobData] = useState([]);

      
    
      const fetchJobs = async(query, id = null, year=null) => {
    // setLoading(true);
    // setError(null);
    
    // try {
    //     const options = {
    //       method: 'GET',
    //       url: 'https://jsearch.p.rapidapi.com/search',
    //       params: {
    //         query: query,
    //         page: '1',
    //         num_pages: '1'
    //       },
    //       headers: {
    //         'X-RapidAPI-Key': '9490d3e935msh3097086bf9dab75p17240fjsna572f49f2b5e',
    //         'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    //       }
    //     };

    //       const response = await axios.request(options);
    //     //   console.log("Jobs : ",response.data.data);
    //       setJobs(response.data.data);
    //     } catch (error) {
    //       console.error(error);
    //       setError(error);
    //     }
    //     setLoading(false);

    // new
    setLoading(true);
    setError(null);
  
    try {
      let options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: query,
          page: '1',
          num_pages: '1'
        },
        headers: {
          // // 'X-RapidAPI-Key': '9490d3e935msh3097086bf9dab75p17240fjsna572f49f2b5e',
          // // 'X-RapidAPI-Key': '49283f42a6mshe98fb250eeff359p125399jsnbc084c983dfc',
          // 'X-RapidAPI-Key': '0087a22248msh02d31c3c64342c4p13d7b2jsnad34c70e5eda',
          // 'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          // 9963c66e0amsh77638ed37419596p1e65f7jsn64b3028ceb69

          'X-RapidAPI-Key': '0087a22248msh02d31c3c64342c4p13d7b2jsnad34c70e5eda',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  
        }
      };
      
      // If an ID is provided, modify the API request to only fetch that job
      if (id) {
        options.url = `https://jsearch.p.rapidapi.com/jobs/${id}`;
        options.params = {};
      }
  
      const response = await axios.request(options);
      setJobs(response.data.data);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  
    setLoading(false);
      };
    
      return (
        <JobContext.Provider value={{jobs, loading, error, fetchJobs}} >
            {children}
        </JobContext.Provider>
      ) 
}

export {JobContextProvider, JobContext};