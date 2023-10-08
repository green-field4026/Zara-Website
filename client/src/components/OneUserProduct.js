import React ,{useState}from "react";

const OneUserProduct = ({obj,index}) => {

  return (
    <tr index={index}>
      <td className="cart-image">
        <img src={obj.Images[0].image_Url} />
        <span>{obj.name}</span>
        <i className="fa-solid fa-circle-xmark" ></i>
      </td>
      <td>{obj.price}</td>
      <td>
        <input
          type="number"
          defaultValue={obj.stockNumber}
         
          className="inpuuus"
        />
      </td>
    </tr>
  );
};

export default OneUserProduct;
