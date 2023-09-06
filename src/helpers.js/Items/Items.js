import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ItemsDetails from "./ItemsDetails";
import { CartContext} from "../../components/CartContext";
// import aa from "../pictures/carsoule-care.jpg"

export default function Items() {
  const url = "http://localhost:5000/api/customer/get-item";
  const [foodItems, getfoodItems] = useState([]);
  useEffect(() => {
    getAllFoodItems();
  }, []);

  const getAllFoodItems = async (e) => {
    const fetcher = await axios
      .get(url)
      .then((response) => {
        const foodData = response.data;
        getfoodItems(foodData);
      })
      .catch((error) => console.error(`Error: $(error)`));
  };
  const {cart} = useContext(CartContext) ;
  useEffect(() => {
    // console.log(cart);
  }, [cart]);;

  return (
    <div className="container custom-container-2">
      {foodItems.map(([categoryName, items]) => (
        <div key={categoryName}>
          <h2 className="mx-2 my-4 category-name">{categoryName}</h2>
          <div className="item-list">
            <ItemsDetails items={items} />
          </div>
        </div>
      ))}
    </div>
  );
}
