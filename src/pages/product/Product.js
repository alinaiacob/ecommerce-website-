import React,{useContext,useState,useEffect} from 'react'
import "./Product.css";
import { CartContext } from '../../context/CartContext';
import {useHistory} from 'react-router-dom';
import {isInCart} from '../../helper/helpers';
const Product = ({image,title,price,id}) => {
    const product={image,title,price,id};
    const{addProduct,cartItems,increase}=useContext(CartContext);
    const itemInCart=isInCart(product,cartItems);
    const history=useHistory()
    return (
        <div className='product'>
            <img src={image} onClick={()=>{history.push(`/product/${id}`)}}/>
            <span>{title}</span>
            <p>$<strong>{price}</strong></p>
            <div className='btns'>
                {!itemInCart?<button onClick={()=>addProduct(product)}> Add to Basket</button>:
                <button onClick={()=>increase(product)}>Add More</button>
              
                }
            </div>
               
   
            
        </div>
    )
}

export default Product
