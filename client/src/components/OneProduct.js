 import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OneProduct=({oneElement,key})=>{
    console.log()
     return(
        <Link to="/details"  state={{ from: oneElement}} className='cardlink'>
             <div key={key} className='productCard'>
                 <img src={oneElement.Images[2].image_Url} alt='product-img' className='productImage'></img>

                 <FaShoppingCart className={"productCard__cart cardicons"} />
                 <FaRegBookmark className={"productCard__wishlist cardicons"} />
                 <FaFireAlt className={"productCard__fastSelling cardicons"} />

                 <div className='productCard__content'>
                     <h3 className='productName'>{oneElement.name}</h3>
                     <div className='displayStack__1'>
                         <div className='productPrice'>${oneElement.price}</div>
                         <div className='productSales'>{oneElement.stockNumber} in Stock</div>
                     </div>
                     <div className='displayStack__2'>
                         <div className='productRating'>
                             {[...Array(5)].map((index,i) => (
                                 <FaStar id={`${index+ 1 }`} key={i} />
                             ))}
                         </div>
                         <div className='productTime'>{5}</div>
                     </div>
                 </div>
             </div>
        </Link>
     )
 }
 export default OneProduct