import React ,{useState}from "react";

const OneCartElement = ({obj,key,total,setTotal}) => {
    const [quantity, setQuantity] = useState(1);
  return (
    <tr key={key}>
      <td className="cart-image">
        <img src={obj.Images[0].image_Url} />
        <span>{obj.name}</span>
        <i className="fa-solid fa-circle-xmark"></i>
      </td>
      <td>{obj.price}</td>
      <td>
        <input
          type="number"
          defaultValue={quantity}
          onChange={(e) => {setQuantity(e.target.value);}}
          className="inpuuus"
        />
      </td>
      <td>{obj.price * quantity}</td>
    </tr>
  );
};

export default OneCartElement;
