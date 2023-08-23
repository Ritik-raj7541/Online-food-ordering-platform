import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemsDetails from "./ItemsDetails";
// import aa from "../pictures/carsoule-care.jpg"

export default function Items() {
  const url = "http://localhost:5000/api/customer/getItem";
  const [foodItems, getfoodItems] = useState([]);
  useEffect(() => {
    console.log("useeffect");
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

  return (
    <div className="container custom-container-2">
      {foodItems.map(([categoryName, items]) => (
        <div key={categoryName}>
          <h2 className="mx-2 my-4">{categoryName}</h2>
          <div className="item-list">
            <ItemsDetails items={items} />
          </div>
        </div>
      ))}
    </div>
  );
}
