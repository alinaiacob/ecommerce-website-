

import React,{useReducer,useContext,createContext} from 'react';
import CartReducer,{sumItems} from './CartReducer'
export const CartContext=createContext();


export const CartContextProvider=({children})=>{
    const initialState={cartItems:[],sumItems:0,user:null};
    const [state,dispatch]=useReducer(CartReducer,initialState);
    const addProduct=(product)=>dispatch({type:"ADD_ITEM",payload:product});
    const increase=(product)=>dispatch({type:'INCREASE',payload:product})
    const decrease=(product)=>dispatch({type:'DECREASE',payload:product})
    const removeProduct=(product)=>dispatch({type:'REMOVE_ITEM',payload:product});
    const setUser=(user)=>dispatch({type:"SET_USER",payload:user});
    const logout=()=>dispatch({type:"LOGOUT"});
    const clear=()=>dispatch({type:"CLEAR"})
    const contextValues={
        ...state,
        addProduct,
        increase,
        decrease,
        removeProduct,
        clear,
        setUser,
        logout
       
       
    }
    return(
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )

} 

export const CartContextValue=()=>useContext(CartContext);