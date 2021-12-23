import React,{useContext}  from 'react'

import {CartContext} from '../context/CartContext';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import "./CartItem.css"
const CartItem = (product) => {
    const{title,image,price,quantity,id}=product;
    const{increase,decrease,removeProduct,clea,addProduct}=useContext(CartContext)
    return (
        <div className='cartItem'>
            <div className='cartItem__left'>
              <img src={image}/>
            </div>
            <div className='cartItem__right'>
               <h4>{title}</h4>
                <p>$ <strong>{price}</strong></p>
          
           
                 <p>{`Quantity : ${quantity}`}</p>
                 <div className='btns__container'>
            <button className='btn-increase'>
                        <AddCircleIcon onClick={()=>increase(product)}/>
                    </button>
                    {quantity===1&&
                     <button className='btn-trash'>
                     <DeleteIcon className='btn-red'
                     onClick={()=>removeProduct(product)}
                     />
                    </button>
                    
                    }
                    {quantity>1 &&
                    <button className='btn-minus'> 
                    <RemoveCircleIcon className='btn-white'
                     onClick={()=>decrease(product)}
                    />
                         
                    </button>
                   
                    }
            </div>
            </div>
            
           
            
      
         
          

        </div>
    )
}

export default CartItem;
