import React ,{useContext}from 'react';
import CartItem from './CartItem'
import "./CartPage.css"
import{CartContext} from '../context/CartContext';
import Total from './total/Total';

const CartPage = () => {
 const{cartItems,itemCount,total,clear}=useContext(CartContext);

    return (
        <div className='cart'>
            <h1>Cart</h1>
        {cartItems.length>0 ?
            <>
            <div className='cartPage'>
            
         
            <div className='cartPage__container'>
              {cartItems.map((item)=>{
                  return(<CartItem  {...item} key={item.id}/>)
            })}
            <Total/>
            </div>
            
        </div>
            </>
            :
            <>
            <h2>Your Cart is empty</h2>
            </>
        
        }
        </div>
       
    )
}

export default CartPage;
