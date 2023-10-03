import React from "react";
import "../styles/Navbar.css"
import {Link} from "react-router-dom";
const HomeNav = () => {
  return (
    <div className="header">
       <div className="logo">
         Exclusive
       </div>
         <ul className="options">
            <li><Link  className="link" to="/">Home</Link></li>
            <li><Link  className="link" to="/contact">Contact</Link></li>
            <li><Link  className="link" to="/about">About</Link></li>
            <li><Link className="link" to="/signup">Sign-up</Link></li>
         </ul>
         <div className="nav">
         <div className="serach">
         <input  type="text" placeholder="What are you looking for"/>
         <i className="fa-solid fa-magnifying-glass" ></i>
         </div>
         <div className="navigations">
         <i className="fa-solid fa-cart-shopping"></i>
         <i className="fa-regular fa-heart"></i>
         </div>
         </div>
    </div>
  );
};

export default HomeNav;
