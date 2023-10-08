import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const HomeNav = () => {
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentuser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [currentState, setcurrentState] = useState("Buyer");

  const logged = localStorage.getItem("token");
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("Wishlist");
    localStorage.removeItem("token");
  };
  useEffect(() => {
    setcurrentState(currentUser?currentUser.state:null)
  },[]);
  const search = async (name) => {
    try {
      const task = await axios.get(
        `http://localhost:1337/products/search/${name}`
      );
      setSearchData(task.data);
    } catch (e) {
      console.error(e);
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const [searchData, setSearchData] = useState([]);
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
          {logged ? null : (
            <Link className="link" to="/signup">
              Sign Up
            </Link>
          )}
        </li>
        <li>
          {currentState === "Seller" ? (
            <Link className="link" to="/seller">
              Add Product
            </Link>
          ) : null}
        </li>
      </ul>
      <div className="nav">
        <div className="searchResult">
          <div className="search">
            <input
              type="text"
              className="theone"
              defaultValue={""}
              onChange={(e) => {
                search(e.target.value);
              }}
              placeholder="What are you looking for"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          {searchData.length ? (
            <ul className="tofind">
              {searchData.map((item) => {
                return (
                  <Link className="linkss" to="/details" state={{ from: item }}>
                    <li className="searchItem">{item.name}</li>{" "}
                  </Link>
                );
              })}
            </ul>
          ) : null}
        </div>
        <div className="navigations">
          {logged ? (
            <Link className="link" to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>{" "}
            </Link>
          ) : null}
          {logged ? (
            <i
              className="fa-regular fa-heart"
              onClick={() => navigate("/wishList")}
            ></i>
          ) : null}
          {currentUser && (
            <>
              <i
                className="fa-solid fa-user"
                id="profile"
                onClick={() => setOpen(!open)}
              ></i>
              {open && (
                <div className="dropdown">
                  <div
                    onClick={() => navigate("/account")}
                    className="dropdownitem"
                  >
                    <i className="fa-regular fa-user"></i>Manage My Account
                  </div>
                  <div className="dropdownitem" onClick={()=>navigate("/cart")}>
                    <i className="fa-solid fa-bag-shopping"></i>My Order
                  </div>
                  <div className="dropdownitem">
                    <i className="fa-regular fa-circle-xmark"></i>My
                    Cancellations
                  </div>
                  <div className="dropdownitem">
                    <i className="fa-regular fa-star"></i>My Reviews
                  </div>
                  <div
                    className="dropdownitem"
                    onClick={() => (logOut(), navigate("/login"))}
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    Logout
                  </div>
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
