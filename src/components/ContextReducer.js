//new changes
import React, {createContext, useState} from 'react' ;

export const CartContext = createContext() ;

export const CartProvider = ({children}) => {
      const[cart, setCart] = useState([]) ;
      const addToCart = (product) => {
         switch (product.type) {
            case "ADD":
                  return setCart([...cart, {id: product.id, name: product.name, price: product.price, qty: product.qty, size: product.size, img: product.img}]) ;         
            case "DELETE":
                  let newArray = [...cart] ;
                  newArray.splice(product.index, 1) ;
                  console.log(product.index," -> ", newArray);
                  return setCart(newArray) ;
            case "UPDATE":
            default:
                  break;
         }
          
      } ;
      return(
            <CartContext.Provider value={{cart, addToCart}}>
                  {children}
            </CartContext.Provider>
      ) ;
} ;
// import React, { createContext, useContext, useReducer } from 'react'

// const CartStateContext = createContext() ;
// const CartDispatchContext = createContext() ;

// const reducer = (state, action)=>{
// switch (action.type) {
//       case "ADD":
//             // console.log(state);
//             return [...state, {id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img}]

//       default:
//             console.log("Error in reducer");
// }
// }
// export const CartProvider = ({children}) =>{
//       const[state, dispatch] = useReducer(reducer, [])
//       return(
//             <CartDispatchContext.Provider value={dispatch}>
//                   <CartStateContext.Provider value={state}>
//                         {children}
//                   </CartStateContext.Provider>
//             </CartDispatchContext.Provider>
//       )
// }
// export const useCart = () => useContext(CartStateContext) ;
// export const useDispatchCart = () => useContext(CartDispatchContext) ;
