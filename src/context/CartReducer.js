
 export const sumItems=cartItems=>{
 
     return{
         itemCount:cartItems.reduce((total,product)=>total+product.quantity,0),
         total:cartItems.reduce((total,product)=>total+(product.price*product.quantity),0)
     }
 }
 
 
 
 const CartReducer=(state,action)=>{
     switch(action.type){
         case 'ADD_ITEM':
             // check if item is in cart
             if (!state.cartItems.find(item => item.id === action.payload.id)) {
               state.cartItems.push({
                 ...action.payload,
                 quantity: 1,
               })
             }
       
             return {
               ...state,
               cartItems: [...state.cartItems],
               ...sumItems(state.cartItems)
             }
           case 'INCREASE':
             const increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
             state.cartItems[increaseIndex].quantity++;
             
             return {
               ...state,
               cartItems: [...state.cartItems],
               ...sumItems(state.cartItems),
             }
           
             case 'DECREASE':
               const decreaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
               const product = state.cartItems[decreaseIndex];
               if (product.quantity > 1) {
                 product.quantity--;
               }
               
               return {
                 ...state,
                 cartItems: [...state.cartItems],
                 ...sumItems(state.cartItems),
               }
               case 'REMOVE_ITEM':
                 const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
                 return {
                   ...state,
                   cartItems: [...newCartItems],
                   ...sumItems(newCartItems), 
                 }
               case 'CLEAR':
                  localStorage.removeItem('cart')
                 return {
                   ...state,
                   cartItems: [],
                   itemCount: 0,
                   total: 0,
                 }  
                 case"SET_USER":
                 return{
                     ...state,
                     user:action.payload,
                    
                 }
                 
                 case 'LOGOUT':
                     return{
                         ...state,
                         user:null
                     }
          
         default:
             return state;
     }
 }
 export default CartReducer;