import React,{useState,useEffect} from 'react';
import "./Home.css";
import {db} from "./firebase";
import styled from "styled-components";


const Home = () => {

    const [products,setProducts]=useState([]);
   
   
 
    return (
        <div className='home'>
            
            <div className='home__left'>
              <img src='/back2.jpg' className='homeLeftFirst' id='img'/>
              <img src='/back1.jpg'  className='homeLeftSecond' id='img'/>
            </div>
          
        
            <div className='home__right'>
                <div className='home__rightText'>
                   <p> A Touch of Grace</p>
                   <h4>The Precious Jewellry works in life that light up your way</h4>
                   </div>
                   <button>Go to Shop</button>
                  
                
            
            
                
               </div>
  
           
        </div>
    )
}

export default Home
