import React from "react";
import "../styles/footer.css"
import apple from "../imgs/appleStore.png"
import google from "../imgs/googleplay.png"
import qr from "../imgs/Qrcode.png"
const Footer = () => {
  return (
    <div class="footer">
      <div class="frame">
        <div class="under-line"></div>
        <div class="frame-wrapper">
         
        </div>
      </div>
      <div class="frame-2">
        <div class="frame-3">
          <div class="frame-4">
            <div class="frame-4">
              <div class="logo">
                <div class="text-wrapper-2">Exclusive</div>
              </div>
              <div class="text-wrapper-3">Subscribe</div>
            </div>
            <p class="text-wrapper-4">Get 10% off your first order</p>
          </div>
          <div class="send-mail">
            <div class="text-wrapper-5">Enter your email</div>
            <i class="fa-solid fa-share"></i>
          </div>
        </div>
        <div class="frame-4">
          <div class="text-wrapper-6">Support</div>
          <div class="frame-3">
            <p class="element-bijoy-sarani">
              111 Bijoy sarani, Dhaka,&nbsp;&nbsp;DH 1515, Bangladesh.
            </p>
            <div class="text-wrapper-4">exclusive@gmail.com</div>
            <div class="text-wrapper-4">+88015-88888-9999</div>
          </div>
        </div>
        <div class="frame-4">
          <div class="text-wrapper-6">Account</div>
          <div class="frame-3">
            <div class="text-wrapper-7">My Account</div>
            <div class="text-wrapper-4">Login / Register</div>
            <div class="text-wrapper-4">Cart</div>
            <div class="text-wrapper-4">Wishlist</div>
            <div class="text-wrapper-4">Shop</div>
          </div>
        </div>
        <div class="frame-4">
          <div class="text-wrapper-6">Quick Link</div>
          <div class="frame-3">
            <div class="text-wrapper-7">Privacy Policy</div>
            <div class="text-wrapper-4">Terms Of Use</div>
            <div class="text-wrapper-4">FAQ</div>
            <div class="text-wrapper-4">Contact</div>
          </div>
        </div>
        <div class="frame-4">
          <div class="frame-4">
            <div class="text-wrapper-6">Download App</div>
            <div class="frame-5">
              <p class="p">Save $3 with App New User Only</p>
              <div class="frame-6">
                <div class="qr-code">
                  <img class="qrcode" src={qr}  alt="prob"/>
                </div>
                <div class="frame-7">
                  <img class="google-play" src={google}   alt="prob"/>
                  <div class="app-store">
                    <img
                      class="download-appstore"
                      src={apple}
                      alt="prob"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-8">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
