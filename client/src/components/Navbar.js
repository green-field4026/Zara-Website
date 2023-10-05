import React from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const logged = localStorage.getItem("token");
  const logOut =  () => {
    localStorage.removeItem("user");
    localStorage.removeItem("Wishlist");
    localStorage.removeItem("token");
  };
  const location = useLocation()
  return (
    <div className="header">
      <div className="logo">Exclusive</div>
      <ul className="options">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>

        {location.pathname==="/signup" ||"/login"?null:logged ? (
          <Link className="link" to="/login">
            log Out
          </Link>
        ) : (
          <Link className="link" to="/signup" onClick={() => logOut}>
            Sign Up
          </Link>
        )}
      </ul>
      <div className="serach">
        <input type="text" placeholder="What are you looking for" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Navbar;
