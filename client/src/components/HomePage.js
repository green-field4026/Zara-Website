import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import TopHearder from "./TopHearder";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <div>
      <TopHearder />
      <Navbar />
      this is home page
      <Link to="/signup"> go signup</Link>
      <Footer/>
    </div>
  );
};

export default HomePage;
