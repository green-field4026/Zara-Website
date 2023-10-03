import React from "react";
import { Link } from "react-router-dom";
import HomeNav from "./HomeNav";
import TopHearder from "./TopHearder";
import Footer from "./Footer";
import Countdown from "./Countdown";
import "../styles/HomePage.css";
import contents from "../content";
import { Products } from "./products";
const HomePage = () => {
  const currentDate = new Date();
  const year =
    currentDate.getMonth() === 11 && currentDate.getDate() > 24
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear();
  console.log(year);
  return (
    <div>
      <TopHearder />
      <HomeNav />
      <div className="first-section">
        <div className="list">
          <ul>
            <li>Woman’s Fashion</li>
            <li>Men’s Fashion</li>
            <li>Electronics</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
        <div id="carouselExampleIndicators" class="carousel slide slider">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://www.notebookcheck.org/uploads/tx_nbc2/AppleiPhone14Pro__1__01.JPG"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.ytimg.com/vi/FT3ODSg1GFE/maxresdefault.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.01net.com/app/uploads/2022/10/MEA2-iPhone-14-Pro-Photo-Test.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        <div className="title">
          <div className="carre"></div>
          <span className="titre">Today’s</span>
        </div>
        <div className="before-cards" >
          <div className="timer">
          <h1>Flash Sales</h1>
          <Countdown date={`${year}-10-06T00:00:00`} />
          </div>
            <div className="left-right">
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>

        <div className="cards">
          {contents.map((contents) => (
            <Products
              key={contents.id}
              image={contents.image}
              name={contents.name}
              price={contents.price}
              totalSales={contents.totalSales}
              timeLeft={contents.timeLeft}
              rating={contents.rating}
            />
          ))}
        </div>
        <button id="all-prod">View All Products</button>
      </div>
{/* category */}
<div className="container">
        <div className="title">
          <div className="carre"></div>
          <span className="titre">Categories</span>
        </div>
        <div className="before-cards" >
          <div className="timer">
          <h1>Browse By Category</h1>
          </div>
            <div className="left-right">
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
        <div className="categorys">
          <div className="oneCata">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <span>Phones</span>
          </div>

          <div className="oneCata">
          <i class="fa-solid fa-computer"></i>
            <span>Computer</span>
          </div>

          <div className="oneCata">
          <i class="fa-solid fa-stopwatch"></i>
            <span>SmartWatch</span>
          </div>

          <div className="oneCata">
          <i class="fa-solid fa-camera"></i>
            <span>Camera</span>
          </div>

          <div className="oneCata">
          <i class="fa-solid fa-headphones"></i>
            <span>Headphones</span>
          </div>

          <div className="oneCata">
          <i class="fa-solid fa-gamepad fa-bounce"></i>
            <span>Gaming</span>
          </div>
        </div>
      </div>

{/* best selleres */}
<div className="container">
        <div className="title">
          <div className="carre"></div>
          <span className="titre">Today’s</span>
        </div>
        <div className="before-cards" >
          <div className="timer">
          <h1>Best Selling Products</h1>
          </div>
            <div className="left-right">
            <button id="view">View All </button>  
            </div>
        </div>

        <div className="cards">
          {contents.map((contents) => (
            <Products
              key={contents.id}
              image={contents.image}
              name={contents.name}
              price={contents.price}
              totalSales={contents.totalSales}
              timeLeft={contents.timeLeft}
              rating={contents.rating}
            />
          ))}
        </div>
      </div>
      <div className="container">
         <div className="ads">
            <div className="infos">
              <span id="title">Categories</span>
              <span id="bigtitle">Enhance Your Music Experience</span>
              <button>Buy Now!</button>

            </div>
            <div className="images1">
              <img src="https://shreepng.com/img/Inside/Electronic/Speaker/JBL%20Boombox%20Black%20Hero.png"/>
            </div>

         </div>
      </div>

      <div className="container">
        <div className="title">
          <div className="carre"></div>
          <span className="titre">Our Products</span>
        </div>
        <div className="before-cards" >
          <div className="timer">
          <h1>Explore Our Products</h1>
          </div>
            <div className="left-right">
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>

        <div className="cards">
          {contents.map((contents) => (
            <Products
              key={contents.id}
              image={contents.image}
              name={contents.name}
              price={contents.price}
              totalSales={contents.totalSales}
              timeLeft={contents.timeLeft}
              rating={contents.rating}
            />
          ))}
        </div>
        <button id="all-prod">View All Products</button>
      </div>
     <div className="container">
        <div className="title">
          <div className="carre"></div>
          <span className="titre">Featured</span>
        </div>
        <div className="before-cards" >
          <div className="timer">
          <h1>New Arrival</h1>
          </div>
        </div>

      
      <div class="wrapper">
  <div class="box a">
  <img src="https://s3-alpha-sig.figma.com/img/455c/8d64/08463f7e8f57dd3048a2444dbfa0cb90?Expires=1697414400&Signature=jAlofke6wPIDMztvp-pD-J9fYb5PRbmXEzdxbOuiR4yLT25Xw~3RFBHGwi7gd~F0BnBoFA6vD6InEeri~6M9vHGeYBMkPtPzOy466jOPgkBykxI~YTg3XmPM4Awx2bWc8xScxk4PiXbB-PNOAZObJAxVSCpOWqKyBZcozcR~mlJDDkEEFbUBWkPWreulo6gR5qIYgqn9YWYOjjEwDmyOcbfbjaeVYX28LxE44JFbUpmQFClcdxSnNJsP4PR8miw3hfGzsMvU5Z7517BVQEhecE~OxZ3FvIce3FEMvO6ITx1w2WrIeEXhD4ROQhOsQpldxj4rO7y7YTH61y7FVadBTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

  <div className="infos1">
              <span id="title">Women’s Collections</span>
              <span className="texting">Featured woman collections that give you another vibe.</span>
              <span id="buy">Buy Now!</span>
            </div>
  </div>
  <div class="box b">
    <img src="https://s3-alpha-sig.figma.com/img/1c36/0f79/0c1817d3afa266b3c9f8c81ff0ed4428?Expires=1697414400&Signature=oaW1zklLcMx5CqgqGRqpJtV1rIqv3UllkEocOfDGiPfORRP9yljn9-uVZwn6AJWaZwzEpcyLTKKq~~Ae-TUFTpAJxDhDZwPmVA4GWH2kzkOsJdn8ifOj1pfzpiV3-0OdSu73fNqfjZuViEIEgdySpAhK4b3eG93t-v7m3wOko-IogBhSuM5C-mIeO5oDe-WTHOnFUh6ukGhk2pbZce4Ifzi~tN3VYmniJ9W1RsTXe14fjNvHP-1MsmbH-9d170stQTzq7ZzlTFGBkf56FlpnxZE3Gz5ZLS3O9R0HqtfOSvA75loX5JQlKqg31YB3EFdHyWzTASD2ofmu5ksMwXP4MQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
    <div className="infos1">
              <span id="title">PlayStation 5</span>
              <span className="texting">Black and White version of the PS5 coming out on sale.</span>
              <span id="buy"> Buy Now!</span>
            </div>
  </div>
  <div class="box c">
  <img src="https://s3-alpha-sig.figma.com/img/e565/9d57/2977438364a41d7e8c9d1e9a794d43ed?Expires=1697414400&Signature=dRDoZK0n1cMhkBz2d3wVQw7B7ARvhImXcFbRfIq~ytX4EQ8ceKFDHTvcFQyBzOgiTgfwz1O~yewyD8ANU9uUB3~CMKTJi9HZq3CVF6z-cwjHwLVTukDK71cbrNDEQtSTx8kAPzHDmFAsZsWbKIVGNalxwf4EoqkjtLuoZxNUVPyNA7vnC1oxvDLzIxomXQHvZV9U00g48UqszqzP19~12mXeT6tweDaFR5N~ftrdW6WjnTeXo3A-Q83ERpDRgWNS-5KvM7xrJ3ZcW7ZLJjC17McBRwaPxmEQ3QWJF3mf6Cee-970cJNy~44fEQNkRuqyYaIMD-xxQhhcFlx8lxQj9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
  <div className="infos1">
              <span id="title">Speakers</span>
              <span className="texting">Amazon wireless speakers.</span>
              <span id="buy" >Buy Now!</span>
            </div>
  </div>
  <div class="box d">
  <img src="https://s3-alpha-sig.figma.com/img/1531/5cd1/5102562cf220504d288fa568eaa816dd?Expires=1697414400&Signature=OqNkjx21Klzu8amFuyTkdznpAGwRFd8NRRih5jTFCiHIdhng5KxxRD76wX-bz6tWLi631vM3ZSpplrNxScVthOZKKnYPeHp5mrYmr0AErSHKJPb~owoKjbtkZ7cLWnAJvNiWXB~qI12L5473d0bX~NZeovmRc5BEImYEWjUmUGMrQO5hEvsElDABXjozI46WGiXWIN5g5ZcHc9TWLszRxj3YkpymCpP5yxa3oSwFLEombdv~vpuLaa8ETzW9EJdxBaRFebdj5nsaF92jBhMaXB3CMQ-nERfDBRPDJRP3IgePXmuoJxQ6zIhABmn~tXD~YW8SdaMXPNodyI3R6SAW1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

  <div className="infos1">
              <span id="title">Perfume</span>
              <span className="texting">GUCCI INTENSE OUD EDP</span>
              <span id="buy">Buy Now!</span>
            </div>
  </div>
</div>
   
</div>
      <Footer />
    </div>
  );
};

export default HomePage;
