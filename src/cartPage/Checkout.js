import React from 'react';
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css"
import {useStateValue} from "./StateProvider";

const Checkout = () => {
    const[{basket},dispatch]=useStateValue();
     
    const total=basket.reduce((acc, itemBasket) =>parseInt(parseInt(itemBasket.price) + acc),0);   
    return (
        <div className='checkout'>
            <h1>Checkout</h1>
            <h3>Total: ${total}</h3>
            <div className='checkoutProducts'>
              {basket.map((checkoutProduct)=>{
                  return(<CheckoutProduct image={checkoutProduct?.image}
                                          title={checkoutProduct?.title}
                                          price={checkoutProduct?.price}
                                          key={checkoutProduct?.id}
                                          id={checkoutProduct?.id}/>)
            })}
            </div>
            
        </div>
    )
}

export default Checkout
