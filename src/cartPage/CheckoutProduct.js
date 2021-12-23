import React from 'react'
import './CheckoutProduct.css';
import{useStateValue} from "./StateProvider";
const CheckoutProduct = ({image,title,price,id}) => {
    const[{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
      dispatch({
          type:"REMOVE_FROM_BASKET",
          id:id
      })
    }
    return (
        <div className='checkoutProduct'>
             <img src={image}/>
             <span>{title}</span>
             <p>$<strong>{price}</strong></p>
             <button onClick={removeFromBasket}>Remove from basket</button>

        </div>
    )
}

export default CheckoutProduct
