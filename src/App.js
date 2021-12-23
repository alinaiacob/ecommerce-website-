import React,{useState,useEffect} from "react";
import{BrowserRouter as Router,Switch,Route} from "react-router-dom"
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Rings from "./pages/Rings";
import Earrings from './pages/Earrings';

import CartPage from './cartPage/CartPage'
import LoveEngagement from "./pages/LoveEngagement";
import Watches from "./pages/Watches";
import SingleProduct from "./singleProduct/SingleProduct";

import NotFound from "./NotFound";



function App() {


  return (
 
      
           <div className="app">
            <Header/>
             <Switch>
                 <Route exact path='/' component={Home}/>
                 <Route path='/login' component={Login}/> 
                 <Route path='/rings' component={Rings}/>     
                 <Route path='/earrings' component={Earrings}/>
                 <Route path='/watches' component={Watches}/>
                 <Route path='/love&Engagement' component={LoveEngagement}/>
                
                 <Route path='/cart' component={CartPage}/>
                
                 <Route path='*' component={NotFound}/>
                 
               </Switch>
           </div>
      
     
    
  );
}

export default App;
