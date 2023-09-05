//new changes
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    switch (product.type) {
      case "ADD":
        return setCart([
          ...cart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            qty: product.qty,
            size: product.size,
            img: product.img,
          },
        ]);
      case "DELETE":
        let newArray = [...cart];
        newArray.splice(product.index, 1);
        return setCart(newArray);
      case "UPDATE":
        let arr = [...cart];
        arr.find((food, index) => {
          if (food.id === product.id && food.size === product.size) {
            arr[index] = {
               ...food,
              qty: parseInt(product.qty) + parseInt(food.qty),
              price: product.price + food.price,
            };
          }
        });
        return setCart(arr) ;
      case "DROP":
        let newArr = [] ;
        return setCart(newArr) ;
      default:
        break;
    }
  };
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
