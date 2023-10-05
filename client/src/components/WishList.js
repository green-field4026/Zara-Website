import React, { useEffect, useState } from "react";
import Footer from "./Footer";

import TopHeader from "./TopHearder";
import OneProduct from "./OneProduct";
import "../styles/WishList.css";
import HomeNav from "./HomeNav";
import axios from "axios";

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

  console.log(Products);

  useEffect(() => {
    WishListData.map((obj) => getProducts(obj.ProductId));
  }, []);
  return (
    <div>
      <div className="wishlist-screen">
        <div className="wishlist-2">
          <TopHeader className="top-header-instance" />
          <HomeNav />

          <div className="frame-21">
            <div className="frame-22">
              <div className="frame-23">
                <div className="text-wrapper-20">
                  Wishlist ({Products.length})
                </div>
                <button className="design-component-instance-node-4">
                  Move All To Bag
                </button>
              </div>
              <div className="frame-24">
                {Products.map((obj, i) => (
                  <OneProduct oneElement={obj} key={i} />
                ))}
              </div>
            </div>
            <div className="frame-22">
              <div className="frame-25">
                <div className="frame-26">
                  <div className="text-wrapper-20">Just For You</div>
                </div>
                <button className="design-component-instance-node-4">
                  See All
                </button>
              </div>
              <div className="frame-24"></div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
};

export default WishList;
