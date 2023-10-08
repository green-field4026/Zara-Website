import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import TopHeader from "./TopHearder";
import HomeNav from "./HomeNav";

function SellerSection({ addProdSeller,setSellerProduct ,products}) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState("")
  const [avaiblility, setAvailibility] = useState('in Stock')
  const [fImage, setFImage] = useState('')
  const [sImage, setSImage] = useState('')
  const [tImage, setTImage] = useState('')
  const [foImage, setFoImage] = useState('')
  const [rate,setRate]=useState(3)
  const [user, setUser] = useState(JSON.parse(localStorage.user));
  const navigate = useNavigate();



  const getProdSeller=()=>{
  
    var x=products.filter(e=>e.id===user.id)
    setSellerProduct(x);
   
    }
  return (
    <div>
      <TopHeader />
      <HomeNav />
<button onClick={()=>{navigate("/sellerProducts");getProdSeller()}}>my products</button>
      <label>Your product:</label><br></br>
      <span>Name:</span><input placeholder='name of the product ' onChange={(e) => { setName(e.target.value);  }} /><br></br>
      <span>Quantity:</span><input defaultValue={1} type='number' placeholder='number of quantity' onChange={(e) => { setQuantity(e.target.value) }} /><br></br>
      <span>Price :</span><input defaultValue={1} type="number" placeholder='Price of the product' onChange={(e) => { setPrice(e.target.value) }} /><br></br>
      <span>Description:</span><input placeholder='description of the product' onChange={(e) => { setDescription(e.target.value) }} /><br></br>
      <span>Category:</span><select onChange={(e) => { setCategory(e.target.value);  }}>
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

      </select>    <br></br>
      <span>Avaiblility:</span><select onChange={(e) => { setAvailibility(e.target.value) }}>
        <option value="in Stock">in Stock</option>
        <option value="out Of Stock">out Of Stock</option>
      </select><br></br>



      <label>add 4 images of your product :</label><br></br>
      <span></span><input onChange={(e) => { setFImage(e.target.value);  }} placeholder='First image' /><br></br>
      <span></span><input onChange={(e) => { setSImage(e.target.value); }} placeholder='Seecond image' /><br></br>
      <span></span><input onChange={(e) => { setTImage(e.target.value); }} placeholder='Third image' /><br></br>
      <span></span><input onChange={(e) => { setFoImage(e.target.value)}} placeholder='Forth image' />
      <button type='submit' onClick={() => {
addProdSeller({ name:name, stockNumber: quantity*1, price:price*1,rate:rate*1, desc: description, category:category, state: avaiblility ,UserId:user.id}
          , [fImage, sImage, tImage, foImage])
      }}>Add Product</button>

      <Footer />
    </div>
  )
}

export default SellerSection