import React from "react";
import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <div class="header">
       <div className="logo">
         Exclusive
       </div>
         <ul className="options">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
         </ul>
         <div className="serach">
         <input  type="text" placeholder="What are you looking for"/>
         <i class="fa-solid fa-magnifying-glass" ></i>
         </div>
    </div>
  );
};

export default Navbar;
