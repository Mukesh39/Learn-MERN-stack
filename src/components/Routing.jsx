import React from "react";
import Home from "./Home.jsx";
import About from "./About";
import Products from "./Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NoMatch />} />

          <Route path = '/home' element={<Home/>} />       
        </Routes>
      </Router>
    </>
  );
};


export default Routing; 
