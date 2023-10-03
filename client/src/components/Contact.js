import { useCallback, React } from "react";
import Footer from './Footer.js'
import Navbar from './Navbar.js'
import TopHeader from './TopHearder.js'
import '../styles/Contact.css'


const Contact = () => {
  const onHomeTextClick = useCallback(() => {
    // Please sync "E-Commerce HomePage" to the project
  }, []);

  return (
    <div>
      <TopHeader/>
    <Navbar/>
      <div className="contact-inner">
        <div className="frame-group">
          <div className="placebox-info-parent">
            <div className="placebox-info">
              <div className="place-to-info-box" />
              <div className="md">
                <span>{`Your Name `}</span>
                <span className="span">*</span>
              </div>
            </div>
            <div className="placebox-info">
              <div className="place-to-info-box" />
              <div className="md">
                <span>{`Your Email `}</span>
                <span className="span">*</span>
              </div>
            </div>
            <div className="placebox-info">
              <div className="place-to-info-box" />
              <div className="md">
                <span>{`Your Phone `}</span>
                <span className="span">*</span>
              </div>
            </div>
          </div>
          <div className="placebox-info3">
            <div className="place-to-info-box" />
            <div className="md">Your Massage</div>
          </div>
          <div className="button">
            <div className="view-all-products">Send Massage</div>
          </div>
        </div>
      </div>
      <div className="frame-div">
        <div className="frame-container">
          <div className="logo-group">
            <div className="icons-phone-parent">
              <img className="icons-phone" alt="" src="/iconsphone.svg" />
              <div className="view-all-products">Call To Us</div>
            </div>
            <div className="we-are-available-247-7-days-parent">
              <div className="we-are-available">
                We are available 24/7, 7 days a week.
              </div>
              <div className="english">Phone: +8801611112222</div>
            </div>
          </div>
          <img className="underline-icon1" alt="" src="/underline1.svg" />
          <div className="logo-group">
            <div className="icons-phone-parent">
              <img className="icons-mail" alt="" src="/iconsmail.svg" />
              <div className="view-all-products">Write To US</div>
            </div>
            <div className="we-are-available-247-7-days-parent">
              <div className="fill-out-our">
                Fill out our form and we will contact you within 24 hours.
              </div>
              <div className="english">Emails: customer@exclusive.com</div>
              <div className="english">Emails: support@exclusive.com</div>
            </div>
          </div>
        </div>
      </div>
      <div>
       <Footer/>
    </div>
    </div>
  );
};

export default Contact;
