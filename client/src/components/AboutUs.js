import React from "react";
import HomeNav from "./HomeNav";
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
      <HomeNav />
         <div className="about-section">
                <div className="about-text">
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
          
                </div>
          <div className="about-option">
          <div className="oneElement optionone">
         <i className="fa-solid fa-shield-halved"></i>
         <span>We reurn money within 30 days</span>
     </div>
     <div className="oneElement optionone">
         <i className="fa-solid fa-shield-halved"></i>
         <span>We reurn money within 30 days</span>
     </div>
     <div className="oneElement optionone">
         <i className="fa-solid fa-shield-halved"></i>
         <span>We reurn money within 30 days</span>
     </div>
     <div className="oneElement optionone">
         <i className="fa-solid fa-shield-halved"></i>
         <span>We reurn money within 30 days</span>
     </div>
          </div>




        <div className="container">
   <div className="elemets">
     <div className="oneElement">
     <i className="fa-solid fa-truck"></i>
        <h5>FREE AND FAST DELIVERY</h5>
         <span>Free delivery for all orders over $140</span>
     </div>

     <div className="oneElement">
     <i className="fa-solid fa-headphones"></i> 
        <h5>24/7 CUSTOMER SERVICE</h5>
         <span>Friendly 24/7 customer support</span>
     </div>
     <div className="oneElement">
     <i className="fa-solid fa-shield-halved"></i>
        <h5>MONEY BACK GUARANTEE</h5>
         <span>We reurn money within 30 days</span>
     </div>

   </div>
</div>  
<Footer />  
           
            
           
  

            </div>
            
    );
};
export default About

