
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import SignUp from "./components/SignUp"
import LoginPage from "./components/LoginPage";
import Contact from "./components/Contact"
import AboutUs from "./components/AboutUs";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
};
export default App
