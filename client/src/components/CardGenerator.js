import React from 'react'
import  OneProduct  from './OneProduct'
const CardGenerator=({cart,setCart,products})=>{
  return (
    <div className="cards">
    {products[0]?products.map((oneElement,i) => (
       <OneProduct cart={cart} setCart={setCart} oneElement={oneElement} key={i} index={i}/>
    )):null}
  </div>
  )
}

export default CardGenerator