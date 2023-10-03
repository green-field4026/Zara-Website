import React from "react";
import { Link } from "react-router-dom";
import HomeNav from "./HomeNav";
import TopHearder from "./TopHearder";
import Footer from "./Footer";
import "../styles/HomePage.css"
const HomePage = () => {
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
         <div id="carouselExampleIndicators" className="carousel slide slider">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.notebookcheck.org/uploads/tx_nbc2/AppleiPhone14Pro__1__01.JPG" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ytimg.com/vi/FT3ODSg1GFE/maxresdefault.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.01net.com/app/uploads/2022/10/MEA2-iPhone-14-Pro-Photo-Test.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>

{
  // {  }
}







      <Footer/>
    </div>
  );
};

export default HomePage;
