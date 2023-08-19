import React from "react";

export default function ItemsDetails(props) {
  const items = props.items;
  return (
    <div className="container text-center">
      <div className="row">
        {items.map((item) => (
          <div className="col">
            <div className="card mx-2 my-2" style={{ width: "18rem" }}>
              <img
                src={item.img}
                alt={item.name}
                className="card-img-top"
                style={{ height: "200px" }}
                key={item.img}
              />
              <div className="card-body">
                <h5 className="card-title item" key={item._id}>
                  {item.name}
                </h5>
                <p className="card-text" key={item.description}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
