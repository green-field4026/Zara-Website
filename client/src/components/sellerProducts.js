import React, { useState } from "react";
import HomeNav from "./HomeNav";
import TopHearder from "./TopHearder";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { fetchProduct, fetchProductByCategory } from "../redux/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import OneUserProduct from "./OneUserProduct";
import axios from "axios";
const SellerProducts = ({ sellerProduct, setSellerProduct }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [seller, setSeller] = useState([]);
  const [products, setProducts] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:1337/products/getAll");
      setProducts(res.data);
      getProdSeller(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(err);
    }
  };
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getProdSeller = (products) => {
    const arr = []
    products.map((e) =>
       e.UserId === user.id
        ? arr.push(e)
        : console.log("not this user's Product")
    );
    setSeller(arr)
  };

  useEffect(() => {
    getData();

  }, []);
  return (
    <div>
      <TopHearder />

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
                navigate("/sellerProducts");
              }}
              label="Favorites"
              icon={<FavoriteIcon />}
            />
          </BottomNavigation>
        </Box>
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </tbody>
          {seller[0] ? (
            <tbody>
              {seller.map((obj, i) => {
                return <OneUserProduct obj={obj} key={i} index={i} />;
              })}
            </tbody>
          ) : (
            <tbody>
              <tr className="emptyCart">
                <td className="innerText">
                  your Product List is Empty For now
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
      <Footer />
    </div>
  );
};
export default SellerProducts;
