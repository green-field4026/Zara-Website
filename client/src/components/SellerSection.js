import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import TopHeader from "./TopHearder";
import HomeNav from "./HomeNav";
import "../styles/Seller.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, fetchProductByCategory } from "../redux/productsSlice";
function SellerSection({getData, addProdSeller , setSellerProduct }) {
  const navigate = useNavigate();
  const dispatsh = useDispatch();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [avaiblility, setAvailibility] = useState("in Stock");
  const [fImage, setFImage] = useState("");
  const [sImage, setSImage] = useState("");
  const [tImage, setTImage] = useState("");
  const [foImage, setFoImage] = useState("");
  const [rate, setRate] = useState(3);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [value, setValue] = useState(0);
  const currentProducts = useSelector((state) => state.getProducts.value);

  const getProdSeller = () => {
    var x = currentProducts.filter((e) => e.UserId === user.id);
    setSellerProduct(x);
  };

  useEffect(() => {
    getProdSeller();
  }, []);
  return (
    <div>
      <TopHeader />
      <HomeNav />
      <div className="container">
        <Box sx={{ width: 500 }} className="thenaver">
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              onClick={() => {
                navigate("/seller");
              }}
              label="Recents"
              icon={<RestoreIcon />}
            />
            <BottomNavigationAction
              onClick={() => {
                getData();navigate("/sellerProducts")
              }}
              label="Favorites"
              icon={<FavoriteIcon />}
            />
          </BottomNavigation>
        </Box>
        <Link to="/sellerProducts">to SellerProduct</Link>
        <div className="sellersection">
          <div className="theinputs">
            <div className="inputse">
              <label>Your product:</label>
              <span>Name:</span>
              <input
                placeholder="name of the product "
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <span>Quantity:</span>
              <input
                defaultValue={1}
                type="number"
                placeholder="number of quantity"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
              <span>Price :</span>
              <input
                defaultValue={1}
                type="number"
                placeholder="Price of the product"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
              <span>Description:</span>
              <input
                placeholder="description of the product"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <span>Category:</span>
              <select
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value=" ">Select...</option>
                <option value="Woman's Fashion">Woman's Fashion</option>
                <option value="Man's Fashion">Man's Fashion</option>
                <option value="Electronics">Electronics</option>
                <option value="Medicine">Medicine</option>
                <option value="Sports & Outdoor">Sports & Outdoor</option>
                <option value="Baby's & Toys">Baby's & Toys</option>
                <option value="Groceries & Pets">Groceries & Pets</option>
                <option value="Health & Beauty">Health & Beauty</option>
                <option value="Phones">Phones</option>
                <option value="Computer">Computer</option>
                <option value="SmartWatch">SmartWatch</option>
                <option value="Camera">Camera</option>
                <option value="Headphones">Headphones</option>
                <option value="Gaming">Gaming</option>
              </select>
              <span>Avaiblility:</span>
              <select
                onChange={(e) => {
                  setAvailibility(e.target.value);
                }}
              >
                <option value="in Stock">in Stock</option>
                <option value="out Of Stock">out Of Stock</option>
              </select>
            </div>

            <div>
              <label>add 4 images of your product :</label>
              <br></br>
              <span></span>
              <input
                onChange={(e) => {
                  setFImage(e.target.value);
                }}
                placeholder="First image"
              />
              <br></br>
              <span></span>
              <input
                onChange={(e) => {
                  setSImage(e.target.value);
                }}
                placeholder="Seecond image"
              />
              <br></br>
              <span></span>
              <input
                onChange={(e) => {
                  setTImage(e.target.value);
                }}
                placeholder="Third image"
              />
              <br></br>
              <span></span>
              <input
                onChange={(e) => {
                  setFoImage(e.target.value);
                }}
                placeholder="Forth image"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          onClick={() => {
            addProdSeller(
              {
                name: name,
                stockNumber: quantity * 1,
                price: price * 1,
                rate: rate * 1,
                desc: description,
                category: category,
                state: avaiblility,
                UserId: user.id,
              },
              [fImage, sImage, tImage, foImage]
            );
            getProdSeller();
          }}
        >
          Add Product
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default SellerSection;
