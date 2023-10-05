import React from "react";
import "../styles/footer.css"
import apple from "../imgs/appleStore.png"
import google from "../imgs/googleplay.png"
import qr from "../imgs/Qrcode.png"
const Footer = () => {
  return (
    <div className="footer">
      <div className="frame">
        <div className="under-line"></div>
        <div className="frame-wrapper">
         
        </div>
      </div>
      <div className="frame-2">
        <div className="frame-3">
          <div className="frame-4">
            <div className="frame-4">
              <div className="logo">
                <div className="text-wrapper-2">Exclusive</div>
              </div>
              <div className="text-wrapper-3">Subscribe</div>
            </div>
            <p className="text-wrapper-4">Get 10% off your first order</p>
          </div>
          <div className="send-mail">
            <div className="text-wrapper-5">Enter your email</div>
            <i className="fa-solid fa-share"></i>
          </div>
        </div>
        <div className="frame-4">
          <div className="text-wrapper-6">Support</div>
          <div className="frame-3">
            <p className="element-bijoy-sarani">
              111 Bijoy sarani, Dhaka,&nbsp;&nbsp;DH 1515, Bangladesh.
            </p>
            <div className="text-wrapper-4">exclusive@gmail.com</div>
            <div className="text-wrapper-4">+88015-88888-9999</div>
          </div>
        </div>
        <div className="frame-4">
          <div className="text-wrapper-6">Account</div>
          <div className="frame-3">
            <div className="text-wrapper-7">My Account</div>
            <div className="text-wrapper-4">Login / Register</div>
            <div className="text-wrapper-4">Cart</div>
            <div className="text-wrapper-4">Wishlist</div>
            <div className="text-wrapper-4">Shop</div>
          </div>
        </div>
        <div className="frame-4">
          <div className="text-wrapper-6">Quick Link</div>
          <div className="frame-3">
            <div className="text-wrapper-7">Privacy Policy</div>
            <div className="text-wrapper-4">Terms Of Use</div>
            <div className="text-wrapper-4">FAQ</div>
            <div className="text-wrapper-4">Contact</div>
          </div>
        </div>
        <div className="frame-4">
          <div className="frame-4">
            <div className="text-wrapper-6">Download App</div>
            <div className="frame-5">
              <p className="p">Save $3 with App New User Only</p>
              <div className="frame-6">
                <div className="qr-code">
                  <img className="qrcode" src={qr}  alt="prob"/>
                </div>
                <div className="frame-7">
                  <img className="google-play" src={google}   alt="prob"/>
                  <div className="app-store">
                    <img
                      className="download-appstore"
                      src={apple}
                      alt="prob"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-8">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
