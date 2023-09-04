import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import Navbar from "./Navbar";

export default function MyCart() {
  const { cart, addToCart } = useContext(CartContext);
  let totalPrice = cart.reduce((total, food) =>total + food.price, 0) ;
  const handleDeletion = async (index) => {
    await addToCart({
      type: "DELETE",
      index: index,
    }) ;
    // console.log(cart);
  };
  return (
    <>
    <Navbar/>
      <div className="container my-cart">
        <h1 style={{ color: "#FFFFFF" }}>My Cart</h1>
        {cart.length ? (
          <div>
          <table className="table table-custome table-dark">
            <thead>
              <tr>
                <th scope="col">sno.</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Size</th>
                <th scope="col">Price</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr>
                  <th scope="row">{index+1}</th>
                  <td key={item.id}>{item.name}</td>
                  <td key={item.qty}>{item.qty}</td>
                  <td key={item.size}>{item.size}</td>
                  <td key={item.price}>{item.price}</td>
                  <td>
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "#e3e7ed" }}
                      onClick={() => handleDeletion(index)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="fs-2 row">
            <div className="col-4 total-price mx-2">Total Price: ₹ {totalPrice} /-</div>
            <div className="col-4 check-out mx-2">Check Out</div>
          </div>
          
          </div>
          
        ) : (
          <div className="container">Cart is Empty!!</div>
        )}
      </div>
    </>
  );
}
