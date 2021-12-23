import React from 'react'
import "./SingleProduct.css";
const SingleProduct = ({img,title,price,id}) => {
    return (
        <div className='singleProduct'>
            <div className='singleProduct__left'>
                <img src={img} alt='singleProduct__img'/>
            </div>
            <div className='singleProduct__right'>
                <h3>{title}</h3>
                <p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
        </div>
    )
}

export default SingleProduct
