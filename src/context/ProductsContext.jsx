import React,{ createContext,useState,useContext,useReducer } from "react";
import {earrings,rings,watches,loveEngagement} from '../shop/data';

export const ProductsContext=createContext();

const ProductsContextProvider=({children})=>{
   const products={
       earrings,
       rings,
       watches,
       loveEngagement,
   };
  
<ProductsContext.Provider value={{products}}>
        {children}
    </ProductsContext.Provider>
}
export default ProductsContextProvider;
export const ProductsContextValue=()=>useContext(ProductsContext)