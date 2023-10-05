import React from "react";
import Navbar from "./Navbar";
import  TopHeader  from "./TopHearder";
import "../styles/AboutUs.css"
import Footer from "./Footer";
import two from "../imgs/two.png"
import ii from "../imgs/fst.png"
import scd from "../imgs/scd.png"
import thd from "../imgs/thd.png"
import frt from "../imgs/frt.png"
 const About = () => {
    return (
      <div>
      <TopHeader />
      <Navbar />
        <div className="about">
            <div className="div-2">
              
           
              
            
                <div className="frame-12">
                    <div className="text-wrapper-7">Our Story</div>
                    <div className="frame-13">
                        <p className="text-wrapper-8">
                            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in
                            Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has
                            10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                        </p>
                        <p className="exclusive-has-more">
                            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse
                            assotment in categories ranging&nbsp;&nbsp;from consumer.
                        </p>
                    </div>
                </div>
                <div className="side-image">
                    <img
                        className="portrait-two-african"
                        alt="Portrait two african"
                        src={two}
                    />
                </div>
          
                <div className="frame-14">
                    <div className="frame-wrapper">
                        <div className="services-screen">
                    <img
                       
                        src={ii}
                    /> 
                    </div></div>
                    <div className="services-money-back-wrapper">
                    <img
                       
                       src={scd}
                   /> 
                    </div>
                    <div className="frame-wrapper">
                    <img
                       
                       src={thd}
                   />    
                    </div>
                    <div className="frame-wrapper">
                       <img src={frt}/>
                    </div>
                </div>
                <div className="frame-25">
                    <div className="frame-26">
                        <div className="image-wrapper">
                            <img className="image" alt="Image" src="image-46.png" />
                        </div>
                        <div className="frame-27">
                            <div className="frame-28">
                                <div className="text-wrapper-9">Tom Cruise</div>
                                <div className="text-wrapper-10">Founder &amp; Chairman</div>
                            </div>
                          
                        </div>
                    </div>
                    <div className="frame-26">
                        <div className="image-wrapper">
                            <img className="image-2" alt="Image" src="image-51.png" />
                        </div>
                        <div className="frame-27">
                            <div className="frame-28">
                                <div className="text-wrapper-9">Emma Watson</div>
                                <div className="text-wrapper-10">Managing Director</div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="frame-26">
                        <div className="image-wrapper">
                            <img className="image-3" alt="Image" src="image-47.png" />
                        </div>
                        <div className="frame-27">
                            <div className="frame-28">
                                <div className="text-wrapper-9">Will Smith</div>
                                <div className="text-wrapper-10">Product Designer</div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="frame-30">
                    <div className="ellipse-3" />
                    <div className="ellipse-3" />
                    <div className="group-2">
                        <div className="overlap-group-6">
                            
                            <div className="ellipse-4" />
                            <div className="ellipse-5" />
                        </div>
                    </div>
                    
                    <div className="ellipse-3" />
                    <div className="ellipse-3" />
                </div>
           
  

            </div>
            
        </div>
         <Footer/>
        </div>
    );
};
export default About

