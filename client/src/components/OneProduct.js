import axios from "axios";
import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const OneProduct = ({ oneElement, index }) => {
  const Users = JSON.parse(localStorage.getItem("user"));
  const UserId = Users.id;
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
      getWishlist(UserId)
    } catch (e) {
      console.error(e);
    }
  };
  
  return (
    <Link to="/details" state={{ from: oneElement }} className="cardlink">
      <div key={index} className="productCard">
        <img
          src={oneElement.Images[2].image_Url}
          alt="product-img"
          className="productImage"
        ></img>

        <FaShoppingCart className={"productCard__cart cardicons"} />
        <FaRegBookmark
          onClick={() =>
            AddWishlist({
              UserId: UserId,
              ProductId: oneElement.id,
            })
          }
          className={"productCard__wishlist cardicons"}
        />
        <FaFireAlt className={"productCard__fastSelling cardicons"} />

        <div className="productCard__content">
          <h3 className="productName">{oneElement.name}</h3>
          <div className="displayStack__1">
            <div className="productPrice">${oneElement.price}</div>
            <div className="productSales">
              {oneElement.stockNumber} in Stock
            </div>
          </div>
          <div className="displayStack__2">
            <div className="productRating">
              {[...Array(5)].map((index, i) => (
                <FaStar id={`${index + 1}`} key={i} />
              ))}
            </div>
            <div className="productTime">{5}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default OneProduct;
