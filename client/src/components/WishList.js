import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import TopHeader from "./TopHearder";
import "../styles/WishList.css";
import HomeNav from "./HomeNav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WishlistCards from "./WishlistCards";
const WishList = ({ cart, setCart }) => {
  const [Products, setProducts] = useState([]);
  const [WishListData, setWishListData] = useState(
    JSON.parse(localStorage.getItem("Wishlist"))
  );
  const Users = JSON.parse(localStorage.getItem("user"));
  const uId = Users.id;
  const navigate = useNavigate();
  // const Users = JSON.parse(localStorage.getItem("user"));
  // const id = Users.id;
  const remove = async (pId, uId) => {
    try {
      await axios.delete(
        `http://localhost:1337/wishlist/product/${pId}/${uId}`
      );
      getWishlist(uId);
      setProducts(Products.filter((product) => product.id !== pId));
    } catch (e) {
      console.error(e);
    }
  };
  const getWishlist = async (id) => {
    try {
      const task = await axios.get(`http://localhost:1337/wishlist/${id}`);
      localStorage.setItem("Wishlist", JSON.stringify(task.data) || []);
    } catch (e) {
      console.error(e);
    }
  };

  const getProducts = async (id) => {
    try {
      const task = await axios.get(`http://localhost:1337/products/${id}`);
      Products.push(task.data.data);
      setProducts([...Products]);
    } catch (e) {
      console.error(e);
    }
  };

  const getProductsNotInCart = (Products, cart) => {
    return Products.filter((product) => !cart.includes(product));
  };

  useEffect(() => {
    WishListData.map((obj) => getProducts(obj.ProductId));
    console.log(cart);
    getProductsNotInCart(Products, cart);
  }, []);
  return (
    <div>
      <TopHeader />
      <HomeNav />
      <div className="container" id="forwish">
        <div className="before-cards">
          <div className="title">
            <div className="carre"></div>
            <span className="titre"> Wishlist ({Products.length})</span>
          </div>
          <div className="left-right">
            <button
              id="view"
              onClick={() => {
                getProductsNotInCart(Products, cart)[0]
                ? setCart([...cart, ...getProductsNotInCart(Products, cart)])
                : null;
                Products.forEach((obj, i) => {
                  remove(obj.id, uId);
                });navigate('/cart')
              }}
            >
              Move All To Bag
            </button>
          </div>
        </div>
        <div className="cards">
          {Products.length ? (
            Products.map((obj, i) => (
              <WishlistCards remove={remove} i={i} oneElement={obj} key={i} />
            ))
          ) : (
            <h1 className="yourwish">
              {" "}
              Your Wishlist is Empty Please add more Products{" "}
            </h1>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WishList;
