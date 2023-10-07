import React, { useState } from "react";
import  Footer  from "./Footer";

import "../styles/Account.css";
import TopHearder from "./TopHearder";
import Navbar from "./Navbar";

export const Account = ({modifyProfile}) => {
    const [name,setName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [adresse,setAdresse]=useState('')
    const [currentPassword,setcurrentPassword]=useState('')
    const [newPassword,setNewPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
const [user,setUser]=useState(JSON.parse(localStorage.user))
    return (<div>  <TopHearder/>
    <Navbar/>
        <div className="account">
         {console.log(user.name)}
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
                            <input value={user.name}  onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className="frame-21">
                            <div className="text-wrapper-22">Last Name</div>
                            <input placeholder="LastName" onChange={(e)=>setLastName(e.target.value)}  />
                        </div>
                    </div>
                    <div className="frame-22">
                        <div className="frame-21">
                            <div className="text-wrapper-22">Email</div>
                            <input className="placebox-info-instance" onChange={(e)=>setEmail(e.target.value)} value={user.email} />
                        </div>
                        <div className="frame-21">
                            <div className="text-wrapper-22">Address</div>
                            <input placeholder="Adresse" onChange={(e)=>setAdresse(e.target.value)}/>
                        </div>
                    </div>
                    <div className="frame-23">
                        <div className="frame-21">
                            <div className="text-wrapper-22">Password Changes</div>
                            <input className="placebox-info-2" placeholder="Current Passwod" onChange={(e)=>setcurrentPassword(e.target.value)} />
                        </div>
                        <input className="placebox-info-2" placeholder="New Passwod" onChange={(e)=>setNewPassword(e.target.value)}/>
                        <input className="placebox-info-2" placeholder="Confirm New Passwod" onChange={(e)=>setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="frame-24">
                        <div className="text-wrapper-23">Cancel</div>
                        <button onClick={(e)=>{modifyProfile({name:name?name:user.name,
                        lastName:lastName?lastName:user.lastName,
                        email:email?email:user.email,
                        adress:adresse?adresse:user.adresse,
                        currentPassword:currentPassword,
                        newPassword:newPassword,
                        confirmPassword:confirmPassword},e)}}  className="button-instance" >Save Changes</button> 
                    </div>
                </div>
            
            </div>   
        </div> <Footer /></div> 
    );
};
