import React from 'react'
import  OneProduct  from './OneProduct'
const CardGenerator=({products})=>{
  return (
    <div className="cards">
    {products.map((oneElement,i) => (
       <OneProduct oneElement={oneElement} key={i} index={i}/>
    ))}
  </div>
  )
}

export default CardGenerator