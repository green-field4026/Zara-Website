import React from "react";
import Navbar from "./Navbar";
import TopHearder from "./TopHearder";
import photo from "../imgs/login.png"
import Footer from "../components/Footer"
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
              <h1>Log in to Exclusive</h1> 
              <p>Enter your details below</p>
            </div>
            <input  className="in" type="text" placeholder="Email or Phone Number"/>
            <input type="text" placeholder="Password"/>
            <div className="buttons">
                <button >Log In</button>
                <button id="forg">Forget Password?</button>
            </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
