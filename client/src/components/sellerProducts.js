import React, {  useState } from "react";
import HomeNav from "./HomeNav";
import TopHearder from "./TopHearder";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import OneUserProduct from "./OneUserProduct";

const SellerProducts =({sellerProduct})=>{
 const navigate = useNavigate();
 const [value, setValue] = useState(0);
 const [user, setUser] = useState(JSON.parse(localStorage.user));


   return (<div>
    
    <TopHearder  />
   
        <HomeNav/>
        <div className="container">
        <Box sx={{ width: 500 }} className="thenaver">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  onClick={()=>{navigate("/seller")}}label="Recents" icon={<RestoreIcon /> } />
        <BottomNavigationAction  onClick={()=>{navigate("/sellerProducts")}} label="Favorites" icon={<FavoriteIcon /> } />
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
          {sellerProduct ? (
            <tbody>
              {sellerProduct
                ? sellerProduct.map((obj, i) => {
                  return  <OneUserProduct obj={obj} index={i} />
                  })
                 : null} 
             
            </tbody>
          ) : (
            <tbody >
              <tr className="emptyCart" >
                <td className="innerText">your Cart is Empty For now</td>
              </tr>
            </tbody>
          )}
        </table>
    </div>
<Footer/>
    </div>)
}
export default SellerProducts