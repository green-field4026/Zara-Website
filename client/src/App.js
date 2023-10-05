
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import SignUp from "./components/SignUp"
// import Contact from "./components/Contact"
import AboutUs from "./components/AboutUs";
import Wishlist from "./components/Wishlit";
const App = () => {
  return (
    <div className="App">
      <Routes>
       <Route path="/Wishlit" element={<Wishlist/>}></Route> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        {/* <Route path="/contact" element={<Contact />}></Route> */}
        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
};
export default App
