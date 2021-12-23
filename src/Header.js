import React,{useEffect,useContext,useState} from 'react'





import{Link} from "react-router-dom";
import {auth} from "./firebase";
import { CartContext } from './context/CartContext';
import MenuIcon from '@material-ui/icons/Menu';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import "./Header.css";

const Header = () => {
   const[showNav,setShowNav]=useState(false);
  const{logout,user}=useContext(CartContext);
 
    const handleAuthentication=()=>{
        if(user){
           auth.signOut();
           logout()
          
        }
      }
    
    return (
        <div className='header'>
            <div className='header__left'>
              <Link to='/'>
                 
                   <p>Diamond Dreams</p>
                   
                
             </Link>
           </div>
            <nav className={showNav ? 'nav show':'nav'}>
               
                <div className='nav__top'>
                    <Link to={!user && '/login'}>
                      <div onClick={handleAuthentication} className='nav__option'>
                      <span className='nav_optionLineTwo'>{user? 'Sign Out' :'Sign In'}</span>
                      
                       
                        <img src="https://img.icons8.com/pastel-glyph/64/000000/person-male--v1.png" className='account'/>
                       
                       
                      </div>
                   </Link>
                   <Link to='/cart'>
               
                <img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-bag.png" className="cart__icon"/>

                </Link>
                </div>
            
             
                
                
                <ul className='nav__bottom'>
                    <Link to="/rings">
                        <p>Rings</p>
                    </Link>
                    <Link to='/earrings'>
                        <p>Earrings</p>
                    </Link>
                    <Link to="/love&Engagement">
                        <p>Love & Engagement</p>
                    </Link>
                    <Link to="/watches">
                        <p>Watches</p>
                    </Link>
                   
                </ul>
            </nav>    
            <div className='headerIcon'>
                {showNav?  
                <HighlightOffIcon className='xIcon'
                  onClick={(e)=>setShowNav(false)}
                /> 
                :
                <MenuIcon className='menuIcon'
                  onClick={(e)=>setShowNav(true)}
                />
                }
             
            </div>
            </div>
           
                
            
           

      
    )
}

export default Header
