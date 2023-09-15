import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import Navbar from "./Navbar";
import axios from "axios";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";


export default function MyCart() {

  // const stripePromise = loadStripe(process.env.STRIPE_API_KEY) ;
  // const stripe = useStripe() ;
  // const elements = useElements() ;
  const { cart, addToCart } = useContext(CartContext);
  let totalPrice = cart.reduce((total, food) =>total + food.price, 0) ;


  const handleDeletion = async (index) => {
    await addToCart({
      type: "DELETE",
      index: index,
    }) ;
    // console.log(cart);
  };
  const handleCheckOut = async () => {
      const email = localStorage.getItem("userEmail") ;
      // console.log(userEmail);
      const dataForCheckOut = {
        email,
        cart
      } ;
      const response = await axios.post(
        "http://localhost:5000/api/customer/check-out",
         dataForCheckOut
      ) ;
      if(response.status === 200){
        await addToCart({
          type:"DROP",
        }) ;
      }else{
        console.log("not done");
      }
  } ;
  const handlePayNow = async(event) =>{
    event.preventDefault() ;
    // console.log(stripe);
    // console.log(elements);
    // const {error, paymentMethod} = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: elements.getElement(CardElement),
    // }) ;
    // console.log("ritik");
    // if(error){
    //   console.log('[error]',error);
    // }else{
    //   console.log(['PaymentMethod'], paymentMethod);
    // }
  } ;
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
            {/* <div className="col-4 check-out mx-2" onClick={handleCheckOut}>Check Out</div>
            <div className="col-4 check-out mx-2" onClick={handleCheckOut}>Check Out</div> */}
          </div>
          <div className="fs-2 row my-3">
            {/* <div className="col-4 total-price mx-2">Total Price: ₹ {totalPrice} /-</div> */}
            <div className="col-4 check-out mx-2" onClick={handlePayNow}>Pay Now</div>
            <div className="col-4 check-out mx-2" onClick={handleCheckOut}>Cash On Delivery</div>
          </div>
          
          </div>
          
        ) : (
          <div className="container">Cart is Empty!!</div>
        )}
      </div>
    </>
  );
}
