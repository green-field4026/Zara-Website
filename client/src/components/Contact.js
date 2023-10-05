import React from "react";
import call from "../imgs/call.svg"
import mail from "../imgs/mail.svg"
import btn from "../imgs/btn.png"
import  TopHeader  from "../components/TopHearder";
import HomeNav from "./HomeNav"
import Footer from "./Footer";

const Contact = () => {
    return (<div>
                <TopHeader/>
              <HomeNav/>
        
            <div className="container">
           
            
                    <div className="frame-8">
                        <div className="frame-9">
                            <div className="md-wrapper">
                                <p className="md-2">
                                <input type="text" placeholder="Your Name" />
                                    <span className="text-wrapper-7">*</span>
                                </p>
                            </div>
                            <div className="md-wrapper">
                                <p className="md-2">
                                <input type="text" placeholder="Your Email" />
                                    <span className="text-wrapper-7">*</span>
                                </p>
                            </div>
                            <div className="md-wrapper">
                                <p className="md-2">
                                <input type="text" placeholder="Your Phone" />
                                    <span className="text-wrapper-7">*</span>
                                </p>
                            </div>
                        </div>
                        <input className="placebox-info-instance" text="Your Massage" />
                        <img id="hover-image" type="button" src={btn} alt="Button Image"/>
                    </div>
        
              
                    <div className="frame-10">
                        <div className="frame-11">
                            <div className="frame-12">
                               <img src={call}/>
                                <div className="text-wrapper-8">Call To Us</div>
                            </div>
                            <div className="frame-13">
                                <p className="text-wrapper-9">We are available 24/7, 7 days a week.</p>
                                <div className="text-wrapper-10">Phone: +8801611112222</div>
                            </div>
                        </div>
                      
                        <div className="frame-11">
                            <div className="frame-12">
                  <img src={mail} />
                                <div className="text-wrapper-8">Write To US</div>
                            </div>
                            <div className="frame-13">
                                <p className="text-wrapper-11">Fill out our form and we will contact you within 24 hours.</p>
                                <div className="text-wrapper-10">Emails: customer@exclusive.com</div>
                                <div className="text-wrapper-10">Emails: support@exclusive.com</div>
                            </div>
                        </div>
                    </div>
          
               
 
           
        </div>
         <Footer/></div>
    );
};
export default Contact