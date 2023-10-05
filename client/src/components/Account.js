import React from "react";
import  Footer  from "./Footer";

import "../styles/Account.css";
import TopHearder from "./TopHearder";
import Navbar from "./Navbar";

export const Account = () => {
    return (<div>  <TopHearder/>
    <Navbar/>
        <div className="account">
         
            <div className="div-2">
            
                <p className="welcome-md-rimel">
                    <span className="span">Welcome! </span>
                    <span className="text-wrapper-14">Md Rimel</span>
                </p>
                <div className="text-wrapper-15">Manage My Account</div>
                <div className="text-wrapper-16">My Orders</div>
                <div className="text-wrapper-17">My WishList</div>
                <div className="frame-17">
                    <div className="text-wrapper-18">My Profile</div>
                    <div className="text-wrapper-19">Address Book</div>
                    <div className="text-wrapper-19">My Payment Options</div>
                </div>
                <div className="frame-18">
                    <div className="text-wrapper-20">My Returns</div>
                    <div className="text-wrapper-19">My Cancellations</div>
                </div>
                <div className="frame-19">
                    <div className="text-wrapper-21">Edit Your Profile</div>
                    <div className="frame-20">
                        <div className="frame-21">
                            <div className="text-wrapper-22">First Name</div>
                            <input />
                        </div>
                        <div className="frame-21">
                            <div className="text-wrapper-22">Last Name</div>
                            <input text="Rimel" />
                        </div>
                    </div>
                    <div className="frame-22">
                        <div className="frame-21">
                            <div className="text-wrapper-22">Email</div>
                            <input divClassName="placebox-info-instance" text="rimel1111@gmail.com" />
                        </div>
                        <div className="frame-21">
                            <div className="text-wrapper-22">Address</div>
                            <input text="Kingston, 5236, United State" />
                        </div>
                    </div>
                    <div className="frame-23">
                        <div className="frame-21">
                            <div className="text-wrapper-22">Password Changes</div>
                            <input className="placebox-info-2" text="Current Passwod" />
                        </div>
                        <input className="placebox-info-2" text="New Passwod" />
                        <input className="placebox-info-2" text="Confirm New Passwod" />
                    </div>
                    <div className="frame-24">
                        <div className="text-wrapper-23">Cancel</div>
                        <button button="primary" className="button-instance" text="Save Changes" />
                    </div>
                </div>
            
            </div>   
        </div> <Footer /></div> 
    );
};
