import React from 'react';

import {loveEngagement} from  '../shop/data';
import Product from "./product/Product";
import "./Products.css";
const LoveEngagement = () => {
    return (
        <div className='loveEngagement' id="products">
            <h1>Love&Engagement</h1>
            <div className='products'>
              {loveEngagement.map((product)=>{
                  return(<Product  {...product} key={product.id}/>)
            })}
            </div>
         
        </div>
    )
}

export default LoveEngagement
