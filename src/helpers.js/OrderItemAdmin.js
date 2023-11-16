import React, { useContext, useEffect, useState } from "react";
import { OrderContext } from "../components/OrderControlContext";
import axios from "axios";

export default function OrderItemAdmin(props) {
  // let orderItems = props.orderItems;
  const id = props.id ;
  const [orderItems, setOrderItems] = useState(props.orderItems);
  // const { order, deliver } = useContext(OrderContext);

  const adding = async () => {
    // console.log("effect 2", orders);
    // await deliver({
    //   type: "ADD",
    //   orderItems,
    // });
  };
  // useEffect(() => {
  //   adding();
  // }, []);
  const handleStatus = async (item) => {
    const resEmail = localStorage.getItem("adminEmail");
    const custEmail = item.userEmail;
    const url =
      "http://localhost:5000/api/admin/update-orders/" +
      resEmail +
      "/" +
      custEmail;
    console.log(url);
    const res = await axios.get(url);
    if (res.status === 200) {
      const url =
        "http://localhost:5000/api/customer/get-specific-restaurants/" + id;
      const response = await axios.get(url);
      setOrderItems(response.data.orders)
    }
  };
  const handleDeliver = async (index) => {
    // await deliver({
    //   type: "DELETE",
    //   index,
    // });
    handleStatus(orderItems[index]);
  };
  // console.log(orderItems);
  return (
    <div>
      {orderItems.length === 0 ? (
        <div className="container">No orders!!</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">sno</th>
              <th scope="col">User Email</th>
              <th scope="col">Items</th>
              <th scope="col">Status</th>
              <th scope="col">Deliver</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.userEmail}</td>
                <td>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Item Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Size</th>
                      </tr>
                    </thead>

                    <tbody>
                      {item.orderData.map((orders) =>
                        orders.cart.map((cartItem) => (
                          <tr>
                            <td> {cartItem.name} </td>

                            <td> {cartItem.qty} </td>

                            <td> {cartItem.size} </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </td>
                <td>{item.orderData[item.orderData.length - 1].status}</td>
                <td>
                  <i
                    className="fa-solid fa-check"
                    onClick={() => handleDeliver(index)}
                  ></i>
                </td>
              </tr>
            ))}
            {/* item.orderData[0].cart[0].name */}
          </tbody>
        </table>
      )}
    </div>
  );
}
