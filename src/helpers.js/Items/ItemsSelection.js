import React from "react";

export default function ItemsSelection(props) {
  const handleItemAdding = () => {
    console.log("we are here");
  };
  const quantity = props.itemQuant;
  const pricing = props.itemPrice;
  console.log(pricing[0].full);
  return (
    <div>
      <div className="container row">
        <div className="container-item col">
          <select name="" id="" className="">
            {quantity != 0 ? (
              Array.from(Array(quantity), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })
            ) : (
              <option value={0}>0</option>
            )}
          </select>
        </div>

        <div className="container-item col">
        <select name="" id="" className="">
                  <option>half : {pricing[0].half}</option>
                  <option>full : {pricing[0].full}</option>
          </select>
        </div>

        <div className="container-item col" onClick={handleItemAdding}>
          <i
            className="fa-solid fa-circle-plus fa-2xl"
            style={{ color: "#ee2020" }}
          ></i>
        </div>
       
      </div>
    </div>
  );
}
