import React, {  useState } from "react";
import HomeNav from "./HomeNav";
import TopHearder from "./TopHearder";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';


const SellerProducts =({sellerProduct,getClick})=>{
 const navigate = useNavigate();
 
   
   return (<div>
    
    <TopHearder  />
    
        <HomeNav/>
        <h3>you have {sellerProduct.length} products :</h3>
       {sellerProduct.map(e=>{console.log(e);
        return (
        <div key={e.id}>
<h1>{e.name}</h1>
<h3>{e.price}</h3>
<h3>{e.stockNumber}</h3>
<h3>{e.rate}</h3>
<h3>{e.desc}</h3>
<h3>{e.category}</h3>
<h3>{e.state}</h3>
<button onClick={()=>{navigate('/selupdPro'),getClick(e)}}>update</button>
<button>delete</button>
       </div>)})}
<Footer/>
    </div>)
}
export default SellerProducts