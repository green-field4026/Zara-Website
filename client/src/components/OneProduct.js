import axios from "axios";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const logged = localStorage.getItem("token");
const OneProduct = ({ oneElement, index }) => {
  const notify = () => {
    toast.info(oneElement.name + " added to wishlist", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const Users = JSON.parse(localStorage.getItem("user"));
  const UserId = Users ? Users.id : "";
  const getWishlist = async (id) => {
    try {
      const task = await axios.get(`http://localhost:1337/wishlist/${id}`);
      // setWishListData(task.data);
      localStorage.setItem("Wishlist", JSON.stringify(task.data));
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

  return (
    <div key={index} className="productCard">
      <Link to="/details" state={{ from: oneElement }} className="cardlink">
        <img
          src={oneElement.Images[2].image_Url}
          alt="product-img"
          className="productImage"
        ></img>
      </Link>

      {logged ? (
        <i class="fa-solid fa-cart-shopping productCard__cart cardicons"></i>
      ) : null}

      {logged ? (
        <i
          class="fa-regular fa-heart productCard__wishlist cardicons"
          onClick={() => {
            notify();
            AddWishlist({
              UserId: UserId,
              ProductId: oneElement.id,
            });
          }}
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
          <div className="productTime">{oneElement.rate}</div>
        </div>
      </div>
    </div>
  );
};
export default OneProduct;
