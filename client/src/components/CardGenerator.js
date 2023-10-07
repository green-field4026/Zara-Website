import React from 'react'
import  OneProduct  from './OneProduct'
const CardGenerator=({products})=>{
  return (
    <div className="cards">
    {products[0]?products.map((oneElement,i) => (
       <OneProduct oneElement={oneElement} key={i} index={i}/>
    )):null}
  </div>
  )
}

export default CardGenerator