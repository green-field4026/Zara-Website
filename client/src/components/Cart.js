import React, { useEffect, useState } from "react";
import TopHearder from "./TopHearder";
import HomeNav from "./HomeNav";
import Footer from "./Footer";
import "../styles/Cart.css";
const Cart = ({ cart, setCart }) => {
  const [quantity, setQuantity] = useState(1);
  // localStorage.setItem("cart",JSON.stringify(cart))
  useEffect(() => {
    // setData(cart);
  }, []);
  console.log(cart);
  return (
    <div>
      <TopHearder />
      <HomeNav />
      <div className="cart-container">
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </tbody>
          {cart ? (
            <tbody>
              {cart
                ? cart.map((obj, i) => {
                  return(
                    <tr key={i}>
                      <td className="cart-image">
                        <img src={obj.Images[0].image_Url} />
                        <span>{obj.name}</span>
                        <i className="fa-solid fa-circle-xmark"></i>
                      </td>
                      <td>{obj.price}</td>
                      <td>
                        <input type="number" defaultValue={quantity} onChange={(e)=>setQuantity(e.target.value)} className="inpuuus" />
                      </td>
                      <td>{obj.price*quantity}</td>
                    </tr>)
                  })
                 : null} 
               {/* <tr><td>home</td></tr>  */}
            </tbody>
          ) : (
            <tbody >
              <tr className="emptyCart" >
                <td className="innerText">your Cart is Empty For now</td>
              </tr>
            </tbody>
          )}
        </table>
        <div className="checkout">
          <div className="first-checkout">
            <input
              type="text"
              placeholder="Coupon Code"
              className="checkout-input"
            />
            <button id="view">Apply Coupon</button>
          </div>
          <div className="second-checkout">
            <span>Cart Total</span>
            {cart ? (
              <div>
                <div className="section">
                  <span>Subtotal:</span>
                  <span>$1750</span>
                </div>
                <div className="section">
                  <span>Subtotal:</span>
                  <span>$1750</span>
                </div>
                <div className="section" id="total">
                  <span>Total:</span>
                  <span>$1750</span>
                </div>
              </div>
            ) : null}
            <button id="thefinal">Procees to checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
