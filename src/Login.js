import React,{useState,useContext,useReducer} from 'react';
import "./Login.css";

import {auth} from "./firebase";
import{useHistory} from "react-router-dom";

import { CartContext } from './context/CartContext';

const Login = () => {
    
    const {setUser}=useContext(CartContext);
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const history=useHistory();
const register=(e)=>{
    e.preventDefault()
    auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                history.push('/')
            
            }
        })
        .catch((err)=>alert(err.message))

}


const signIn=(e)=>{
    e.preventDefault()
    auth.
         signInWithEmailAndPassword(email,password)
         .then((auth)=>{
             if(auth){
                setUser(auth.user);
                console.log(auth)
                history.push('/')
                
               
               
                 
             }
         })
         .catch((err)=>alert(err.message))
}
    return (

        <div className='login'>

            <div className='login__container'>
                <h1>Sign-In</h1>
                <div className='login__containerSection'>
                   <p>Email</p>
                   <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='login__containerSection'>
                  <p>Password</p>
                  <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
               
                <button onClick={signIn} className='signInButton'>Sign In</button>
                <p className='or'>or</p>
                <button onClick={register} className='registerButton'>Create an account</button>
               
            </div>
        </div>
    )
}

export default Login
