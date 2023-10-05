import React from 'react'
import  OneProduct  from './OneProduct'
const CardGenerator=({products})=>{
  return (
    <div className="cards">
    {products.map((oneElement) => (
       <OneProduct oneElement={oneElement}/>
    ))}
  </div>
  )
}

export default CardGenerator