import React, { useState } from "react";
import Footer from "./Footer";
import TopHearder from "./TopHearder";
import Navbar from "./Navbar";
import {  useNavigate } from "react-router-dom";
import "../styles/Account.css";


export const Account = ({ modifyProfile }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adresse, setAdresse] = useState("");
  const [currentPassword, setcurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.user));
  return (
    <div>
      {" "}
      <TopHearder />
      <Navbar />
      <div className="eleditor">
        <div className="the-list">
          <ul>
            <li>Manage My Account</li>
            <ul>
              <li>My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
            <li onClick={()=>navigate("/cart")}>My Orders</li>
            <ul>
              <li>My Returns</li>
              <li>My Cancellations</li>
            </ul>
            <li   onClick={() => navigate("/wishList")}>My WishList</li>
          </ul>
        </div>


<div className="editProfile">
        <span>Edit Your Profile</span>
        <div className="twoinput">
          <div className="oneinput">
            <label>First Name</label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="oneinput">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="LastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="twoinput">
          <div className="oneinput">
            <label>Email</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={user.email}
            />
          </div>

          <div className="oneinput">
            <label>Address</label>
            <input
              type="text"
              placeholder="Adresse"
              onChange={(e) => setAdresse(e.target.value)}
            />
          </div>
        </div>

        <div className="oneinput" id="pass">
          <label>Password Changes</label>
          <input
            type="password"
            placeholder="Current Password"
            onChange={(e) => setcurrentPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm New Passwod"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="Bouttonss">
          <button id="cancle">Cancel</button>
          <button
            id="view"
            onClick={(e) => {
              modifyProfile(
                {
                  name: name ? name : user.name,
                  lastName: lastName ? lastName : user.lastName,
                  email: email ? email : user.email,
                  adress: adresse ? adresse : user.adresse,
                  currentPassword: currentPassword,
                  newPassword: newPassword,
                  confirmPassword: confirmPassword,
                },
                e
              );
            }}
            className="button-instance"
          >
            Save Changes
          </button>
        </div>
      </div>

      </div>
      
      <Footer />
    </div>
  );
};
