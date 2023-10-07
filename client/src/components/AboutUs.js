import React from "react";
import HomeNav from "./HomeNav";
import TopHeader from "./TopHearder";
import "../styles/AboutUs.css";
import Footer from "./Footer";
import two from "../imgs/two.png";
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
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="exclusive-has-more">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging&nbsp;&nbsp;from consumer.
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
        <i className="fa-solid fa-store"></i>
          <span>We reurn money within 30 days</span>
        </div>
        <div className="oneElement optionone">
        <i className="fa-solid fa-dollar-sign"></i>
          <span>We reurn money within 30 days</span>
        </div>
        <div className="oneElement optionone">
        <i className="fa-solid fa-bag-shopping"></i>
          <span>We reurn money within 30 days</span>
        </div>
        <div className="oneElement optionone">
        <i className="fa-solid fa-sack-dollar"></i>
          <span>We reurn money within 30 days</span>
        </div>
      </div>

      <div className="container aboutts">
        <div className="about-mumber">
          <div className="mumber-image">
            <img src="https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1697414400&Signature=Sz5khTJvZvh2ACAShEw-pG9-LXVS4ciEktnt0K~~kwYk7~~q9mxc71JalE0A-ehW4Bxr5f3OfN235CFPlv58hgu-37s1HEnhtMfs0uc17nX~vXeFp-LkLHgcelLn1XIQM2A1fzeIRPLrPHWuQxGT0paBEPlcuftIjs7hWfeRX2nUvfoWojEA5IPwEXzlBoNfp8JNxhYYsEqPjJatpQkB7yiVfc9JTnozQs9nT82YsEQBebHnEXPWoSu6UJ3eoyVxY8YwhASu08fgW3m2lm8Cu4YyT3jzFpzhCTrehPDZNaptPKvIKjFeCCeSqlWeC1XKeTMxNz2kGdW28D6cDW7t6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>
          <div className="mumber-data">
            <span>Tom Cruise</span>
            <span>Managing Director</span>
            <div className="alliconnss">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className="about-mumber">
          <div className="mumber-image">
            <img src="https://s3-alpha-sig.figma.com/img/8438/eab9/a2fe88af0272adecd83422d0cb7e20d7?Expires=1697414400&Signature=c2BZHxq7np6JSJFJvx3IQ5Y7z8eJk6svhY6vCzIaDxvHGXhNgiCW1qg8HIaxbRGjcjDtW8IC~-gHz5Wla9QvIzzT4QAwfobIzj8aIM5cfHMuhI1Nx4ZhxHAHVfjyATe1a6gZLNC7DIgCEEAt7i0UVm9jKkXwcEhrE~V2A8TZ5wQVJM34E74niMtorWIrYZnen2xy5bAsv8WvOve5tuvn4RJ7hoFbndClpSew2WR-DEgQaY9X6pjO7quWZhbDu-HMHlaHbPnl0cub8Ctsc6CMgfOkIGrzcRVC5REBwVICu~p7gdxdqz8LJw33TJttc-bc6CyHTzMr97Y254LQrh5HVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>
          <div className="mumber-data">
            <span> Emma Watson</span>
            <span>Founder & Chairman</span>
            <div className="alliconnss">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className="about-mumber">
          <div className="mumber-image">
            <img src="https://s3-alpha-sig.figma.com/img/ede4/8f2b/5df8103b281240ce5bafe5dd7d215ab8?Expires=1697414400&Signature=SUyQJwl8k6lVb7giofaLo38aduXIbzA~6ETpUENMzuRM~N0~VlEPaq5SfkLO8YRewI~0JOq0wYXTCAVM~UjHTlk35gVoMQ3tinNLKkVcauIt9PDXqPE1hu9C9k54wVPZczcFRw0n5XcNrouad85MwGrqebr9mu1pRllqH3QX6sIQSLYuiqpyMMc4aR5kgucA-HC0xWd~Xxc57inOWYe0wR9HCEGzGUeXSh-SMzZg8odCiDcJXKiGKKLCD8XKfQ~j382ovYzavLl0qla-EGxtQII45tUvE4FMdhYJuxLfNEtzJjx6RVoLstLmcYr5AHUFq60nx0LbMW2eAsuqVBkjHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          </div>
          <div className="mumber-data">
            <span>Will Smith</span>
            <span>Product Designer</span>
            <div className="alliconnss">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
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
export default About;
