import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AllResturantPage() {
  const [restaurants, setRestaurants] = useState([]);
  const url = "http://localhost:5000/api/customer/get-restaurants";
  const getRestaurant = async () => {
    const response = await axios.get(url);
    if (response.status === 200) {
      setRestaurants(response.data);
    }
  };
  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <div>
      <div className="container">
        <h2 className="my-2">Best Restaurants</h2>
      </div>
      <div className="container">
        {restaurants.length > 0 ? (
          <div className="row">
            {restaurants.map((item) => (
              <div className="col">
                <div
                  className="card mx-2 my-2"
                  style={{ width: "18rem", background: "antiquewhite" }}
                >
                  <img
                    src={item.restaurantImg}
                    alt={item.restaurantName}
                    className="card-img-top"
                    style={{ height: "200px" }}
                    key={item.img}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.restaurantName}</h5>
                    <h6 className="location-star">
                      <span>{item.star} star</span>
                      <span>{item.location}</span>
                    </h6>
                    <p className="card-text">{item.restaurantDescription}</p>
                    <Link to={`/restaurant/${item._id}`} className="order-now">
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
