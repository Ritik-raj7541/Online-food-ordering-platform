import React from "react";

export default function AllItemsAdmin(props) {
  const foodItems = props.foodItems;
  return (
    <div>
      <table className="table">
        <tr>
          <th>Image</th>
          <th>Dish Category</th>
          <th>Dish Name</th>
          <th>Price</th>
        </tr>
        {foodItems.map((item) => (
          <tr>
            <td key={item.img}>
              <img src={item.img} alt="" height="50" width="50" />
            </td>
            <td key={item.CategoryName}>{item.CategoryName}</td>
            <td key={item.name}>{item.name}</td>
            {item.CategoryName !== "Pizza" ? (
              <td key={item.options}>
                {item.options[0].half} / {item.options[0].full}
              </td>
            ) : (
              <td key={item.options}>
                {item.options[0].regular} / {item.options[0].medium} /
                {item.options[0].large}
              </td>
            )}
          </tr>
        ))}
      </table>
      <div className="container">
            <h4>
            Total Items = {foodItems.length}
            </h4>
      </div>
    </div>
  );
}
