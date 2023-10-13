import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ItemsDetails from "./ItemsDetails";
import { CartContext } from "../../components/CartContext";
import { SearchContext } from "../../components/SearchContext";
// import aa from "../pictures/carsoule-care.jpg"

export default function Items(props) {
  const id = props.id ;
  const { searchedFood, Search } = useContext(SearchContext);
  const url = "http://localhost:5000/api/customer/get-item/"+id;
  const [foodItems, getfoodItems] = useState([]);
  useEffect(() => {
    getAllFoodItems();
  }, []);
  
  const getAllFoodItems = async (e) => {
    if(id !== ""){
      const response = await axios.get(url) ;
        if(response.status === 200){
          getfoodItems(response.data) ;
        }
    }
  };
  const { cart } = useContext(CartContext);
  useEffect(() => {
    // console.log(cart);
  }, [cart]);

  return (
    <div className="container custom-container-2">
      {searchedFood.length===0 ? (
        foodItems.map(([categoryName, items]) => (
          <div key={categoryName}>
            <h2 className="mx-2 my-4 category-name">{categoryName}</h2>
            <div className="item-list">
              <ItemsDetails items={items} />
            </div>
          </div>
        ))
      ) : (
        <ItemsDetails items={searchedFood} />
      )}
    </div>
  );
}
