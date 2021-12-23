import React from 'react';
import {earrings} from '../shop/data';
import Product from "./product/Product";
import "./Products.css";
const Earrings = () => {
    return (
        <div className='earrings' id='products'>
            <h1>Earrings</h1>
            <div className='allProducts'>
            <div className='products'>
               {earrings.map((product)=>{
                   return(<Product {...product} key={product.id}/>)
            })}
            </div>
            </div>
           
          
        </div>
    )
}

export default Earrings
