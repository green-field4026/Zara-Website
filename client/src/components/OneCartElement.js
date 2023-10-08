import React ,{useEffect, useState}from "react";

const OneCartElement = ({dummy,setDummy, cart,setCart,obj,index,total,setTotal}) => {
    const [quantity, setQuantity] = useState(1);
    const tot = total
    const finalTotal = obj.price * quantity
    const removed = cart.indexOf(obj)
    const cardData = cart
    useEffect(()=>{
      console.log(cart);
    },[])
  return (
    <tr index={index}>
      <td className="cart-image">
        <img src={obj.Images?obj.Images[0].image_Url:""} />
        <span>{obj.name}</span>
        <i className="fa-solid fa-circle-xmark" onClick={()=>((removed>-1?(cardData.splice(removed,1),setCart(cardData)):null),setDummy(dummy+1)) }></i>
      </td>
      <td>{obj.price}</td>
      <td>
        <input
          type="number"
          defaultValue={quantity}
          onChange={(e) => {setQuantity(e.target.value);setTotal(tot+finalTotal)}}
          className="inpuuus"
        />
      </td>
      <td>{finalTotal}</td>
    </tr>
  );
};

export default OneCartElement;
