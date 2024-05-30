import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div>
        <div className="about-info">
          <p>
            Our job finder website is designed to help job seekers find their
            dream job with ease. With a simple search box where you can enter
            your skills and desired location, our website fetches job listings
            from Rapid API (JSearch API) and presents them to you. We understand
            the importance of finding the right job, and that's why we make it
            easy for you to filter and sort through the job listings to find the
            one that fits your requirements.
          </p>
          <p>
            We are constantly working to improve our website, and we value your
            feedback. Our contact page features a form where you can provide us
            with suggestions on how we can improve our website to better serve
            you.{" "}
          </p>

          <NavLink to="/contact">
            <button>Contact Us</button>
          </NavLink>

          <p>
            Thank you for using our website, and we hope to help you find your
            dream job soon.
          </p>
        </div>

        <div className="about-container">
          <div className="about-image">
            <img src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?size=338&ext=jpg&ga=GA1.2.386372595.1697587200&semt=ais" />
          </div>

          <div className="about-content">
            <h2>Ved Pandere (VP)</h2>
            <p>
              I have developed a job finder website using React.js and the
              JSearch API from RapidAPI. The website allows users to search for
              job opportunities based on their skills and desired location. By
              integrating the JSearch API, we fetch real-time job data from
              platforms like LinkedIn, Indeed, and Glassdoor, ensuring users
              have access to the latest job listings.
            </p>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ved-pandere-17b591229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <BsLinkedin className="LinkedIn-Icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
