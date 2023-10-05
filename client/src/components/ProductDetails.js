import React, { useState } from "react";
import HomeNav from "./HomeNav";
import TopHearder from "./TopHearder";
import Footer from "./Footer";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "../styles/productDetails.css";
const ProductDetails = () => {
  const [quantite,setQuantite] = useState(0)
  const location = useLocation();
  const { from } = location.state;
  console.log(from);
  return (
    <>
      <TopHearder />
      <HomeNav />
      <div className="detail">
        <div className="wrapper1">
          <div className="box1 e">
            <img src={from.Images[0].image_Url} />
          </div>
          <div className="box1 f">
            <img src={from.Images[1].image_Url} />
          </div>
          <div className="box1 g">
            <img src={from.Images[2].image_Url} />
          </div>
          <div className="box1 h">
            <img src={from.Images[3].image_Url} />
          </div>
        </div>

        <div className="selection">

          <div className="selection-one">

          <h1>{from.name}</h1>
          <div className="rating">
          <div className="productRating">
            {[...Array(Math.trunc(from.rate))].map((index, i) => (
              <FaStar id={`${4}`} key={i} />
            ))}
          </div>
          <div className="available">
          {from.state}
          </div>
          </div>
          <span className="price">{from.price}$</span>
          <span className="desc">{from.desc}</span>

        </div>

         <div className="selection-two">
          <div className="color">
            <span>Color :</span>
             <input type="radio"/>
             <input type="radio"/>
          </div>

          <div className="size">
            <span>size :</span>
               <button className="sizes">S</button>
               <button className="sizes">Xs</button>
               <button className="sizes">M</button>
               <button className="sizes">L</button>
               <button className="sizes">XL</button>
          </div>

          <div className="quantite">
              <div className="accumelator">
                  <span className="sub" onClick={()=>{ quantite>0 ?setQuantite(quantite -1):null}}>-</span>
                  <span className="num">{quantite}</span>
                  <span className="add"  onClick={()=>{quantite< from.stockNumber ?setQuantite(quantite +1):null}}>+</span>
              </div>
              <button>Add to card</button>
              <i class="fa-regular fa-heart"></i>
          </div>

          <div className="methods">
              <div className="one-medhod">
                 <i class="fa-solid fa-truck"></i>
                 <div className="method-data">
                    <span>Free Delivery</span>
                    <span id="method-para">Enter your postal code for Delivery Availability</span>
                 </div>
              </div>
              <div className="one-medhod">
              <i class="fa-solid fa-arrows-rotate"></i>
                 <div className="method-data">
                    <span>Return Delivery</span>
                    <span id="method-para">Free 30 Days Delivery Returns. Details</span>
                 </div>
              </div>
          </div>



        </div>


      </div>







      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
