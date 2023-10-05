import React from 'react'
import HomeNav from "./HomeNav";
import TopHearder from "./TopHearder";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';
import CardGenerator from "./CardGenerator"
const AllProduct=() =>{
  const location = useLocation()
  const { from } = location.state
  console.log(from)
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
        <CardGenerator products={from}/>
        </div>
      </div>
      <Footer />
    </>
   
  )
}

export default AllProduct