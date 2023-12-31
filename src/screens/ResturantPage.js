import React, { useState, useEffect } from "react";
import MidSection from "../components/MidSection";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import Search from "../helpers.js/Search";
import axios from "axios";
export default function () {
  const { id } = useParams();
  const [restaurant, setrestaurant] = useState({});
  const url = "http://localhost:5000/api/customer/get-specific-restaurants/"+id;
  // console.log(url);
  const handleRestaurantDetails = async () => {
    const response = await axios.get(url);
    // console.log(response);
    if (response.status === 200) {
      setrestaurant(response.data);
    }
  };
  useEffect(() => {
    handleRestaurantDetails();
  }, []);
  useEffect(() => {
    localStorage.setItem("providerEmail", restaurant.email);
  }, [restaurant]) ;
  
  return (
    <div>
      <Navbar />
      <div className="container location-star">
        <span className="my-4" style={{fontSize:"35px"}}>{restaurant.restaurantName}</span>
        <span>
          <Search id={id}/>
        </span>
      </div>
      <div className="container">
        <MidSection id={id} />
      </div>
    </div>
  );
}
