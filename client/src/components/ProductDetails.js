import React, { useState } from "react";
import HomeNav from "./HomeNav";
import TopHearder from "./TopHearder";
import Footer from "./Footer";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import "../styles/productDetails.css";
const ProductDetails = ({cart,setCart}) => {
  const [quantite,setQuantite] = useState(0)
  const location = useLocation();
  const { from } = location.state;
  const titi = () => {
    toast.success(from.name + " added to cart", {
      pposition: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <TopHearder />
      <HomeNav />
      <div className="detail">
        <div className="wrapper1">
          <div className="box1 e">
            <img alt=" is here" src={from.Images[0].image_Url} />
          </div>
          <div className="box1 f">
            <img alt=" is here" src={from.Images[1].image_Url} />
          </div>
          <div className="box1 g">
            <img alt=" is here" src={from.Images[2].image_Url} />
          </div>
          <div className="box1 h">
            <img alt=" is here" src={from.Images[3].image_Url} />
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
                  <span className="sub" onClick={()=> quantite>0 ?(setQuantite(quantite -1)):setQuantite(quantite)}>-</span>
                  <span className="num">{quantite}</span>
                  <span className="add"  onClick={()=>{quantite<from.stockNumber ?setQuantite(quantite +1):setQuantite(quantite)}}>+</span>
              </div>
              <button onClick={()=> (!cart.includes(from)?(setCart([...cart,from]),titi()):null)}>Add to card</button>
              <i className="fa-regular fa-heart"></i>
          </div>

          <div className="methods">
              <div className="one-medhod">
                 <i className="fa-solid fa-truck"></i>
                 <div className="method-data">
                    <span>Free Delivery</span>
                    <span id="method-para">Enter your postal code for Delivery Availability</span>
                 </div>
              </div>
              <div className="one-medhod">
              <i className="fa-solid fa-arrows-rotate"></i>
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
