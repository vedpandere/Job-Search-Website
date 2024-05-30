import {BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../src/Components/NavBar/NavBar";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Jobsearch from "./Components/JobSearch.js/Jobsearch";
import CardDetail from "./Components/CardDetails/CardDetail";
import Error from "./Components/Error/Error";


function App() {
  return (


      <BrowserRouter>
      <NavBar />
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/jobsearch" element={<Jobsearch />} /> 
        <Route path="/carddetail/:id" element={<CardDetail />} />
        <Route path="/*" element={<Error />} />

        </Routes>
      <Footer /> 

      </BrowserRouter>



  );
}

export default App;
