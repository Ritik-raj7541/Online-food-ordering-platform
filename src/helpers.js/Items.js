import React from "react";
import aa from "../pictures/a.jpg"

export default function Items() {
  return (
    <div className="container custom-container-2">
      <div className="card" style={{width: "18rem"}}>
        <img src={aa} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          
        </div>
      </div>
    </div>
  );
}
