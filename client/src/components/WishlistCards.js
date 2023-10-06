import React from 'react'
import {
    FaShoppingCart,
    FaRegBookmark,
    FaStar,
    FaFireAlt,
  } from "react-icons/fa";
  import { Link } from "react-router-dom";
  



const WishlistCards = ({ oneElement, index}) => {
  
  return (
 <div key={index} className="productCard">
    <Link to="/details" state={{ from: oneElement }} className="cardlink">
        <img
          src={oneElement.Images[3].image_Url}
          alt="product-img"
          className="productImage"
        ></img>
      </Link>
          <i class="fa-solid fa-trash productCard__cart cardicons"></i>
        <div className="productCard__content">
          <h3 className="productName">{oneElement.name}</h3>
          <div className="displayStack__1">
            <div className="productPrice">${oneElement.price}</div>
            <div className="productSales">
              {oneElement.stockNumber} in Stock
            </div>
          </div>
          <div className="displayStack__2">
            <div className="productRating">
              {[...Array(Math.trunc(oneElement.rate))].map((index, i) => (
                <FaStar id={`${index + 1}`} key={i} />
              ))}
            </div>
            <div className="productTime">{oneElement.rate}</div>
          </div>
        </div>
      </div>
    
  );
};
export default WishlistCards;

