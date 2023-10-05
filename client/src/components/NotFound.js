import React from "react";

import  TopHeader  from "./TopHearder";
import "../styles/NotFound.css";
import Footer from "./Footer";
import HomeNav from "./HomeNav";

 const NotFound = () => {
    return (<div>
        <div className="NotFound">
            <div className="div-2">
                <TopHeader  className="top-header-instance" />
               <HomeNav/>
               
                <div className="frame-8">
                    <div className="text-wrapper-8">404 Not Found</div>
                    <p className="text-wrapper-9">Your visited page not found. You may go home page.</p>
                </div>
                <button  className="button-instance" >Back to home page</button>
              
            </div>
              
        </div><Footer/></div>
    );
};
export default NotFound