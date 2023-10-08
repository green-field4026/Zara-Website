import React, { useEffect } from 'react'
import HomeNav from "./HomeNav";
import TopHearder from "./TopHearder";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';
import CardGenerator from "./CardGenerator"
import { useDispatch, useSelector } from "react-redux";
import {  fetchProductByCategory } from "../redux/productsSlice";
const AllProduct=({cart,setCart}) =>{
  const dispatsh = useDispatch()
  const location = useLocation()
 
  const { request,from } = location.state
  const filteredProducts = useSelector((state) => state.getProducts.filterd);
  console.log(request);
  console.log("data",filteredProducts);
  useEffect(()=>{
    dispatsh(fetchProductByCategory(request))
  },[])
  return (
    <>
     <TopHearder />
      <HomeNav />
      <div className="container">
        <div className="title">
          <div className="carre"></div>
          <span className="titre">Explore</span>
        </div>
        <div className="before-cards" >
          <div className="timer">
          <h1>All Products</h1>
          </div>
        </div>
        <div className="cards">
        <CardGenerator products={from?from:filteredProducts} cart={cart} setCart={setCart}/>
        </div>
      </div>
      <Footer />
    </>
   
  )
}

export default AllProduct