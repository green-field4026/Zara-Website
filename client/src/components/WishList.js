import React from "react";
import  Footer  from "./Footer";

import  TopHeader  from "./TopHearder";

import "../styles/WishList.css";
import HomeNav from "./HomeNav";

const WishList = () => {
    return (<div>
        <div className="wishlist-screen"> 
        
            <div className="wishlist-2">
               <TopHeader className="top-header-instance" />
              <HomeNav/>
               
                <div className="frame-21">
                    <div className="frame-22">
                        <div className="frame-23">
                            <div className="text-wrapper-20">Wishlist (4)</div>
                            <button
                                className="design-component-instance-node-4"
                             
                                
                            >Move All To Bag</button>
                        </div>
                        <div className="frame-24">
                           
                        </div>
                    </div>
                    <div className="frame-22">
                        <div className="frame-25">
                            <div className="frame-26">
                               
                                <div className="text-wrapper-20">Just For You</div>
                            </div>
                            <button className="design-component-instance-node-4"  >See All</button>
                        </div>
                        <div className="frame-24">
                           
                        </div>
                    </div>
                </div>
            </div>
          
        </div>  <Footer /></div>
    );
};


export default WishList
