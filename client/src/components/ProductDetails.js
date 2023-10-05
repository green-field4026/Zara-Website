
import React from 'react'
import HomeNav from "./HomeNav";
import TopHearder from "./TopHearder";
import Footer from "./Footer";
import { useLocation } from 'react-router-dom';
const ProductDetails=() =>{
  const location = useLocation()
  const { from } = location.state
  console.log(from)
  return (
    <>
     <TopHearder />
      <HomeNav />

      <Footer />
    </>
   
  )
}

export default ProductDetails