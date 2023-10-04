import React, { useState ,useRef ,useEffect} from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
const HomeNav = () => {
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentuser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setOpen(false);
      }
      document.addEventListener("mousedown", handleClickOutside);
    }}
    , [ref])
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
        <li>
          <Link className="link" to="/signup">
            Sign-up
          </Link>
        </li>
      </ul>
      <div className="nav">
        <div className="serach">
          <input type="text" placeholder="What are you looking for" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="navigations">
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-regular fa-heart"></i>
          {currentUser && (
            <>
              <i
                class="fa-solid fa-user"
                id="profile"
                onClick={() => setOpen(!open)}
              ></i>
              {open && (
                <div className="dropdown">
                  <div className="dropdownitem"><i class="fa-regular fa-user"></i>Manage My Account</div>
                  <div className="dropdownitem"><i class="fa-solid fa-bag-shopping"></i>My Order</div>
                  <div className="dropdownitem"><i class="fa-regular fa-circle-xmark"></i>My Cancellations</div>
                  <div className="dropdownitem"><i class="fa-regular fa-star"></i>My Reviews</div>
                  <div className="dropdownitem"><i class="fa-solid fa-arrow-right-from-bracket"></i>Logout</div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
