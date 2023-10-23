import React from "react";

export default function OrderItemAdmin(props) {
  const orderItems = props.orderItems;
  console.log(orderItems);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">User Email</th>
            <th scope="col">Items</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
       {
            orderItems.map((item) =>(
                  <tr>
                  <td >{item.userEmail}</td>
                  <td>{item.orderData[0].cart.map((cartItem =>(
                        <div>
                              {cartItem.name}
                        </div>
                  )))}</td>
                  <td>{item.orderData[0].status}</td>
                </tr>
            ))
       }
{/* item.orderData[0].cart[0].name */}
          
        </tbody>
      </table>
    </div>
  );
}
