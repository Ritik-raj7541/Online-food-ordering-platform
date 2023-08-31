import React, { useContext } from "react";
import { CartContext } from "./ContextReducer";

export default function MyCart() {
  const { cart } = useContext(CartContext);
  return (
    <div className="container my-cart">
      <h1 style={{ color: "#FFFFFF" }}>My Cart</h1>
      <table className="table table-custome table-dark">
        <thead>
          <tr>
            <th scope="col">sno.</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => (
            <tr>
              <th scope="row">1</th>
              <td key={item.id}>{item.name}</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
