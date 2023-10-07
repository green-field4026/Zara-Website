import axios from "axios";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const OneProduct = ({ cart, setCart, oneElement, index }) => {
  const logged = localStorage.getItem("token");
  const notify = () => {
    toast.info(oneElement.name + " added to wishlist", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const titi = () => {
    toast.success(oneElement.name + " added to cart", {
      pposition: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };


  const Users = JSON.parse(localStorage.getItem("user"));
  const UserId = Users ? Users.id : "";
  const getWishlist = async (id) => {
    try {
      const task = await axios.get(`http://localhost:1337/wishlist/${id}`);
      // setWishListData(task.data);
      localStorage.setItem("Wishlist", JSON.stringify(task.data)|| []);
    } catch (e) {
      console.error(e);
    }
  };
  const AddWishlist = async (input) => {
    try {
      const task = await axios.post("http://localhost:1337/wishlist/", input);
      getWishlist(UserId);
    } catch (e) {
      console.error(e);
    }
  };
  const check = async (uId, pId) => {
    try {
      const task = await axios.get(
        `http://localhost:1337/wishlist/product/${pId}/${uId}`
      );
      const res = (await task.data) ? true : false;
      return res;
    } catch (er) {
      console.error(er);
    }
  };
  return (
    <div key={index} className="productCard">
      <div className="cardcart">
        {console.log(oneElement.Images[3].image_Url)}
        <img
         src={oneElement.Images[3].image_Url}
          alt="product-img"
          className="productImage"
        ></img>

        {logged?<div className="addtocard" onClick={()=>(
          setCart([...cart,oneElement]),
          console.log(cart),
          titi()
        )}>add to card</div>:null}
      </div>

      {logged ? (
        <Link to="/details" state={{ from: oneElement }} className="cardlink">
          <i className="fa-regular fa-eye productCard__cart cardicons"></i>
        </Link>
      ) : null}
      {logged ? (
        <i
          className="fa-regular fa-heart productCard__wishlist cardicons"
          onClick={async () => (
            console.log((await check(UserId, oneElement.id)) === false),
            !(await check(UserId, oneElement.id))
              ? (AddWishlist({
                  UserId: UserId,
                  ProductId: oneElement.id,
                }),
                notify())
              : null
          )}
        ></i>
      ) : null}
      <div className="productCard__content">
        <h3 className="productName">{oneElement.name}</h3>
        <div className="displayStack__1">
          <div className="productPrice">${oneElement.price}</div>
          <div className="productSales">{oneElement.stockNumber} in Stock</div>
        </div>
        <div className="displayStack__2">
          <div className="productRating">
            {[...Array(Math.trunc(oneElement.rate))].map((index, i) => (
              <FaStar id={`${index + 1}`} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default OneProduct;
