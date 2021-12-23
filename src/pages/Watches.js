import React from 'react'
import {watches} from  '../shop/data';
import "./Products.css";
import Product from "./product/Product";
 const Watches = () => {
    return (
        <div className='watches' id='products'>
            <h1>Watches</h1>
            <div className='products'>
               {watches.map((product)=>{
                   return(<Product {...product} key={product.id}/>)
                                  
               })}
            </div>
        </div>
    )
} 
export default Watches;
