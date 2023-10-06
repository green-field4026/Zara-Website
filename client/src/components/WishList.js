import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import CardGenerator from "./CardGenerator";
import TopHeader from "./TopHearder";
import OneProduct from "./OneProduct";
import "../styles/WishList.css";
import HomeNav from "./HomeNav";
import axios from "axios";
import WishlistCards from "./WishlistCards";
const WishList = () => {
  const [Products, setProducts] = useState([]);
  const [WishListData, setWishListData] = useState(
    JSON.parse(localStorage.getItem("Wishlist"))
  );
  const Users = JSON.parse(localStorage.getItem("user"));
  const id = Users.id;
//  

  const getProducts = async (id) => {
    try {
      const task = await axios.get(`http://localhost:1337/products/${id}`);
      Products.push(task.data.data);
      setProducts([...Products]);
    } catch (e) {
      console.error(e);
    }
  };

  console.log("");







  useEffect(() => {
    WishListData.map((obj) => getProducts(obj.ProductId));
  }, []);

  return (
    <div>
      
          <TopHeader/>
          <HomeNav />
          <div className="container">
        <div className="title">
          <div className="carre"></div>
          <span className="titre"> Wishlist ({Products.length})</span>
        </div>
        <div className="before-cards" >
          <div className="timer">
          </div>
            <div className="left-right">
            <button id="view">Move All To Bag</button>  
            </div>
        </div>

        <div className="cards">

        {Products.map((obj, i) => (
                  <WishlistCards oneElement={obj} key={i} />
                ))}

        </div>
      </div>


      <Footer />
    </div>
  );
};

export default WishList;
