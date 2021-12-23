import React from 'react'
import {rings}from  '../shop/data';
import Product from "./product/Product";
import "./Products.css";
function Rings() {
    return (
        <div className='rings' id="products">
            <h1>Rings</h1>
            <div className='allProducts'>
              <div className='products'>
                 {rings.map((product)=>{
                    return(<Product {...product} key={product.id}/>)
                       

             })}
            </div>
            </div>
    
           
        </div>
    )
}

export default Rings
