import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import AllItemsAdmin from "../helpers.js/AllItemsAdmin";
import OrderItemAdmin from "../helpers.js/OrderItemAdmin";

export default function LandingAdmin() {
  const { id } = useParams();
  const [restaurant, setrestaurant] = useState({});
  const [foodItems, setfoodItems] = useState([]);
  const [orderItems, setorderItems] = useState([]) ;

  const fetchRestaurantDetails = async () => {
    const url =
      "http://localhost:5000/api/customer/get-specific-restaurants/" + id;
    const response = await axios.get(url);
    if (response.status === 200) {
      setrestaurant(response.data);
    }
  };
  useEffect(() => {
    fetchRestaurantDetails();
  }, []);
  const getAllItems = async () => {
    setorderItems([]) ;
    setfoodItems(restaurant.foodItems);
  };
  const getAllOrders = async () =>{
      setfoodItems([]) ;
      setorderItems(restaurant.orders) ;
  } ;


  const handleClick = (e) => {
    if (e === 1) {
      fetchRestaurantDetails() ;
      getAllItems();
    } else if (e === 2) {
      fetchRestaurantDetails() ;
      getAllOrders() ;
    } else if (e === 3) {
      console.log(e);
    } else {
      console.log(e);
    }
  };
  return (
    <div className="container my-2">
      <AdminNavbar />
      <div className="container my-3 admin-heading">
        <img className="admin-img" src={restaurant.restaurantImg} alt="" />
        <h1>{restaurant.restaurantName}</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col" onClick={() => handleClick(1)} style={{cursor:"pointer"}}>
            <h4>All Items</h4>
          </div>
          <div className="col" onClick={() => handleClick(2)} style={{cursor:"pointer"}}>
            <h4>Orders</h4>
          </div>
          <div className="col" onClick={() => handleClick(3)} style={{cursor:"pointer"}}>
            <h4>Add Items</h4>
          </div>
          <div className="col" onClick={() => handleClick(4)} style={{cursor:"pointer"}}>
            <h4>Edit Items</h4>
          </div>
        </div>
      </div>
      <hr style={{ borderTop: "3px solid" }} />
      {foodItems.length === 0 ? "" : <AllItemsAdmin foodItems={foodItems} />}
      {orderItems.length === 0 ? "" : <OrderItemAdmin orderItems = {orderItems} id={id}/>}
    </div>
  );
}
