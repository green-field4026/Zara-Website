import React, { useState } from "react";
const UpdateProSeller=({proToUp,imgToUp,updProdSeller})=>{
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState("")
    const [avaiblility, setAvailibility] = useState('in Stock')
  
    const [rate,setRate]=useState(3)

    return (<div>
<label>Your product:</label><br></br>

      <span>Name:</span><input value={proToUp.name} onChange={(e) => { setName(e.target.value);  }} /><br></br>
      <span>Quantity:</span><input type='number' value={proToUp.stockNumber} onChange={(e) => { setQuantity(e.target.value) }} /><br></br>
      <span>Price :</span><input  type="number" value={proToUp.price} onChange={(e) => { setPrice(e.target.value) }} /><br></br>
      <span>Description:</span><input value={proToUp.desc} onChange={(e) => { setDescription(e.target.value) }} /><br></br>
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



    </div>)
}
export default UpdateProSeller