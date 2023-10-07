import React, { useState } from "react";
import Navbar from "./Navbar";
import TopHearder from "./TopHearder";
import photo from "../imgs/login.png";
import Footer from "../components/Footer";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
const LoginPage = ({logAlert, authenticate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  return (
    <div>
      <TopHearder />
      <Navbar />
      <div className="login">
        <div className="img">
          <img src={photo} className="loginphoto" alt="login" />
        </div>
        <div className="inpuuu">
          <div className="inputs">
            <div className="text">
              <h1>Log in to Exclusive</h1>
              <p>Enter your details below</p>
            </div>
            <input
              className="in"
              type="email"
              required
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
              {logAlert}
            <input
              type="password"
              required
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="buttons">
              <button
                onClick={() => (
                  authenticate({ email, password }),localStorage.setItem("Wishlist",JSON.stringify([]))
                )}
              >
                Log In
              </button>
              <button id="forg" onClick={()=>navigate("/signup")}>Forget Password?</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
