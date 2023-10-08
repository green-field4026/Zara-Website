import React, { useEffect, useState } from "react";
import TopHearder from "./TopHearder";
import HomeNav from "./HomeNav";
import Footer from "./Footer";
import "../styles/Cart.css";
import OneCartElement from "./OneCartElement";
const Cart = ({ cart, setCart }) => {
  const [dummy, setDummy] = useState(0);
  useEffect(() => {
    console.log(cart);
  }, []);
  const [total, setTotal] = useState(0);
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
                    return (
                      <OneCartElement
                        dummy={dummy}
                        setDummy={setDummy}
                        cart={cart}
                        setCart={setCart}
                        obj={obj}
                        key={i}
                        index={i}
                        total={total}
                        setTotal={setTotal}
                      />
                    );
                  })
                : null}
            </tbody>
          ) : (
            <tbody>
              <tr className="emptyCart">
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
                <div className="section" id="total">
                  <span>Total:</span>
                  <span>${total}</span>
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
