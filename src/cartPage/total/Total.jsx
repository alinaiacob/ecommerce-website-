import React,{useContext} from 'react'
import {CartContext} from '../../context/CartContext';
import {sumItems} from '../../context/CartReducer';
import './Total.css'
const Total = () => {
    const{itemCount,total}=useContext(CartContext);
  
    return (
        <div className='total'>

            <h2>Total items: <span>{itemCount}</span></h2>
            <h1>Amount to pay $ <span>{total}</span> </h1>
        </div>
    )
}

export default Total
