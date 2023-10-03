import React from "react";
import { Link } from "react-router-dom";
import HomeNav from "./HomeNav";
import TopHearder from "./TopHearder";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <div>
      <TopHearder />
      <HomeNav />
      <div className="first-section">
         <div className="list">
           <ul>
             <li>Woman’s Fashion</li>
             <li>Men’s Fashion</li>
             <li>Electronics</li>
             <li>Medicine</li>
             <li>Sports & Outdoor</li>
             <li>Baby’s & Toys</li>
             <li>Groceries & Pets</li>
             <li>Health & Beauty</li>
           </ul>
         </div>

      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
