import React ,{useState}from "react";

const OneUserProduct = ({obj,index,editProduct,deleteProduct,getProdSeller,products}) => {
const [form,setForm] = useState({
stockNumber:obj.stockNumber,
price:obj.price
})

const hundleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

  return (
    <tr index={index}>
      <td className="cart-image">
        <img src={obj.Images[0].image_Url} />
        <span>{obj.name}</span>
        <i className="fa-solid fa-circle-xmark" onClick={()=>{deleteProduct(obj.id,products)}}></i>
      </td>
      <td> <input type="number" defaultValue={obj.price} name="price" onChange={(e)=>{hundleChange(e)}} className="inpu1"/></td>
      <td>
        <input
          type="number"
          defaultValue={obj.stockNumber}
          className="inpu1"
          name="stockNumber"
          onChange={(e)=>{hundleChange(e)}}
        />
      </td>
      <td>
        <i class="fa-solid fa-pen-to-square" id="editicon" onClick={()=>{editProduct(obj.id,form)}}></i>
      </td>
    </tr>
  );
};

export default OneUserProduct;
