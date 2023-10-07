import React from "react";
import TopHeader from "../components/TopHearder";
import HomeNav from "./HomeNav";
import Footer from "./Footer";
import "../styles/contact.css";
const Contact = () => {
  return (
    <div>
      <TopHeader />
      <HomeNav />
      <div className="contact">
        <div className="content">
          <div className="left">
            <div className="left-first" id="first-contact">
              <div className="content-icon">
               <i className="fa-solid fa-phone"></i>
                <span>Call To Us</span>
               </div>
               <span>We are available 24/7, 7 days a week.</span>
               <span>Phone: +8801611112222</span>

            </div>
            <div className="left-first">
              <div className="content-icon">
              <i className="fa-regular fa-envelope"></i>
                <span>Write To US</span>
               </div>
               <span>Fill out our form and we will contact you within 24 hours.</span>
               <span>Emails: customer@exclusive.com</span>
               <span>Emails: support@exclusive.com</span>

            </div>

          </div>
          <div className="right">
            <div className="smallInputs">
                <input type="text" placeholder="Your Name"/>
                <input type="text" placeholder="Your Email"/>
                <input type="text" placeholder="Your Phone"/>
            </div>
            <div className="bigInputs">
                <textarea placeholder="Your Message"/>
            </div>
            <button id="view">Send Massage</button>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Contact;
