import React, { useState } from "react";
import Navbar from "./Navbar";
import TopHearder from "./TopHearder";
import photo from "../imgs/login.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/login.css";
const LoginPage = ({roleAlert, alert, create }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState();

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
              <h1>Create an account</h1>
              <p>Enter your details below</p>
            </div>
            <input
              className="in"
              type="text"
              required
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {alert}
            <input
              className="in"
              type="email"
              required
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <select
              onChange={(e) => setState(e.target.value)}
              id="role"
              name="role"
            >
              <option value=" ">Select...</option>
              <option value="Seller">Seller</option>
              <option value="Buyer">Buyer</option>
            </select>
            {roleAlert}
            <div className="buttons2">
              <button
                onClick={(e) =>
                  create(e, {
                    state: state,
                    name: name,
                    email: email,
                    password: password,
                  })
                }
              >
                Create Account
              </button>
              <button id="google">
                <i className="fa-brands fa-google"></i>Sign up with Google
              </button>
              <div className="text2">
                <p>Already have account?</p>

                <Link to="/login">
                  <p id="log">Log In</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
