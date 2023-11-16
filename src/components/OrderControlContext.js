import axios from "axios";
import React, { Children, createContext, useState, useEffect } from "react";

export const OrderContext = createContext();

export const OrderControlProvider = ({ children }) => {
      const handleStatus = async (item) =>{
            const resEmail = localStorage.getItem("adminEmail") ;
            const custEmail = item.userEmail ;
            const url = "http://localhost:5000/api/admin/update-orders/" + resEmail + "/" + custEmail ;
            console.log(url);
            const res = await axios.get(url) ;
      } ;
  const [orders, setorders] = useState([]);
  useEffect(() => {
      console.log("orders-> ",orders);
  }, [orders])
  const deliver = async (product) => {

    switch (product.type) {
      case "ADD":
        return setorders(...orders,product.orderItems);
      case "DELETE":
            let newArray = [...orders];
            // console.log("neArray- ",newArray);
            handleStatus(newArray[product.index]) ;
            newArray.splice(product.index, 1);
            console.log("newarray- ",newArray[product.index]);
            return setorders(newArray);
      //   break;
      default:
        break;
    }
  };
  return (
    <OrderContext.Provider value={{ orders, deliver }}>
      {children}
    </OrderContext.Provider>
  );
};
