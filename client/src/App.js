import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import LoginPage from "./components/LoginPage";
import Contact from "./components/Contact"
import AllProduct from "./components/AllProduct";
import ProductDetails from "./components/ProductDetails"
import { store } from './redux/store'
import { Provider } from 'react-redux'
import AboutUs from "./components/AboutUs";
import axios from "axios";
import { Account } from "./components/Account";
import NotFound from "./components/NotFound";
import WishList from "./components/WishList";
import Cart from "./components/Cart"
import { ToastContainer } from 'react-toastify';
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import SellerSection from "./components/SellerSection";
const App = () => {
  const [alert, setAlert] = useState("");
  const [roleAlert, setRoleAlert] = useState("");
  const [logAlert, setLogAlert] = useState("")
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [idImage, setIdImage] = useState('')


  //create a user
  const createUser = async (e, input) => {
    try {
      if (input.password === "" || input.password.length < 8) {
        setAlert(
          "Invalid password. Your password must be at least 8 characters long."
        );
        return;
      }
      if (input.state !== "Buyer" && input.state !== "Seller") {
        setRoleAlert("Invalid selection. Please choose either Buyer or Seller");
        return;
      }
      e.preventDefault();
      const task = await axios.post(
        "http://localhost:1337/users/register",
        input
      );
      navigate("/login");
      console.log(task.data);
    } catch (e) {
      console.error(e);
    }
  };


  //authenticate the login
  const authenticate = async (input) => {
    try {
      const task = await axios.post(
        "http://localhost:1337/users/authenticate",
        input
      );
      console.log(task.data.message);
      if (await task.data.message === "Invalid email/password!!!") {
        setLogAlert("The email  you entered is incorrect. Please try again.")
        return;
      }
      else {
      }
      localStorage.setItem("token", task.data.data.token);
      localStorage.setItem("user", JSON.stringify(task.data.data.user));
      localStorage.setItem("Wishlist", JSON.stringify(task.data.data.products))
      console.log(task.data);
      console.log(task.data.data.user);
      console.log(task.data.data.token);
      navigate("/");

    } catch (e) {
      console.error(e);
    }
  };
  const modifyProfile = (user, e) => {
    console.log(user);
    e.preventDefault()
    if (user.newPassword === user.confirmPassword) {
      axios.post(`http://localhost:1337/users/modify`, user)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
  }

  const getData = () => {
    axios.get("http://localhost:1337/products/getAll")
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  const [cart, setCart] = useState([])
  // console.log(products)

  const  addProdSeller =async (x, y) => {
    console.log(x,'   ',y);

      try {
           await  axios.post('http://localhost:1337/products/addProd', x)
      .then((res) => axios.post('http://localhost:1337/images/add', [{ image_Url: y[0]  ,ProductId: res.data*1},{ image_Url: y[1], ProductId: res.data*1 },
      {image_Url: y[2]  ,ProductId: res.data*1},{image_Url: y[3] , ProductId: res.data*1 }]))

  
      
      } catch (error) {
       throw (error)
      }
  }
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage cart={cart} setCart={setCart} products={products} />}></Route>
          <Route
            path="/login"
            element={<LoginPage logAlert={logAlert} authenticate={authenticate} />}
          >
          </Route>
          <Route
            path="/signup"
            element={
              <SignUp roleAlert={roleAlert} alert={alert} create={createUser} />
            }
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/allproduct" element={<AllProduct cart={cart} setCart={setCart} />}></Route>
          <Route path="/account" element={<Account modifyProfile={modifyProfile} />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/wishList" element={<WishList cart={cart} setCart={setCart} />}></Route>
          <Route path="/details" element={<ProductDetails cart={cart} setCart={setCart} />}></Route>
          <Route path="/privacy" element={<PrivacyPolicy />}></Route>
          <Route path="/terms" element={<TermsOfUse />}></Route>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />}></Route>
          <Route path="/seller" element={<SellerSection addProdSeller={addProdSeller} />}></Route>
        </Routes>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Provider>
  );
};
export default App;
