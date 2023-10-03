import React from "react";
import Navbar from "./Navbar";
import TopHearder from "./TopHearder";
import photo from "../imgs/login.png"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
import "../styles/login.css"
const LoginPage = () => {
  return (
    <div>
      <TopHearder />
      <Navbar />
      <div className="login">
        <div className="img">
        <img src={photo} className="loginphoto" alt="login"/>
        </div>
        <div className="inpuuu">
        <div className="inputs">
            <div className="text">
              <h1>Create an account</h1> 
              <p>Enter your details below</p>
            </div>
            <input  className="in" type="text" placeholder="Name"/>
            <input className="in" type="text" placeholder="Email or Phone Number"/>
            <input type="text" placeholder="Password"/>
            <div className="buttons2">
                <button>Create Account</button>
                <button id="google"><i class="fa-brands fa-google"></i>Sign up with Google</button>
                <div className="text2">
                <p>Already have account?</p>
                
                <Link to="/login"><p id="log">Log In</p></Link>
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
