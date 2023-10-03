import React from "react";
import "../styles/Navbar.css"
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div class="header">
       <div className="logo">
         Exclusive
       </div>
         <ul className="options">
            <li><Link  className="link" to="/">Home</Link></li>
            <li><Link  className="link" to="/contact">Contact</Link></li>
            <li><Link  className="link" to="/about">About</Link></li>
            <li><Link className="link" to="/signup">Sign-up</Link></li>
         </ul>
         <div className="serach">
         <input  type="text" placeholder="What are you looking for"/>
         <i class="fa-solid fa-magnifying-glass" ></i>
         </div>
    </div>
  );
};

export default Navbar;
