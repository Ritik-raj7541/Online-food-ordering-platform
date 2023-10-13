import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import a from "../pictures/delivery-boy.png";
import axios from "axios";

export default function MyProfile() {
  const [user, setuser] = useState(null);
  const email = localStorage.getItem("userEmail");

  const capital = (text) => {
    let a = text[0].toUpperCase() + text.slice(1);
    return a;
  };
  const fetchUserData = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/customer/get-my-details/"+email,
    );
    if (response.status === 200) {
      setuser(response.data);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    // if (user !== null) console.log(user.orderHistory);
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="container profile">
        <div className="row">
          <div className="col col-lg-2">
            <img src={a} alt="" className="profile-image" />
          </div>
          {user !== null ? (
            <ul className="col" style={{listStyleType:"none"}}>
              <li>Name : {capital(user.name)} </li>
              <li>Phone No : </li>
              <li>Address :</li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="container my-3" >
         <h1>Order History : </h1>
      </div>
      
      <div className="container profile my-3">
        {user !== null && user.orderHistory.length !== 0
          ? user.orderHistory.map((order) => (

              <div className="container packet my-3">
                {order.map((items) => (
                  <div className="container  row">
                    <div className="items col-2 my-2" key={1}>
                      <img src={items.img} alt="" className="history-image" />
                    </div>
                    <div className="items col-2" key={1}>
                      {items.name}
                    </div>
                    <div className="items col-1" key={1}>
                      {items.qty}
                    </div>
                    <div className="items col-1" key={1}>
                      ₹ {items.price} /-
                    </div>
                    <div className="items col-1" key={1}>
                      status
                    </div>
                  </div>
                ))}
              </div>
            ))
          : "No order History"}
      </div>
    </>
  );
}
