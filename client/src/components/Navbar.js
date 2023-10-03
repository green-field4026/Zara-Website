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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/signup">Sing-Up</Link></li>
         </ul>
         <div className="serach">
         <input  type="text" placeholder="What are you looking for"/>
         <i class="fa-solid fa-magnifying-glass" ></i>
         </div>
    </div>
  );
};

export default Navbar;
