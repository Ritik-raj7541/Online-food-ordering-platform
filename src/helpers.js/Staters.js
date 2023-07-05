import React from "react";
import a from "../pictures/a.jpg"
import b from "../pictures/b.jpg"
import c from '../pictures/c.jpg'

export default function Staters() {
  return (
    <div className="container rough my-2 w-50">
      <div id="carouselExample" className="carousel slide ">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={a} className="d-block w-100" alt="not found" />
          </div>
          <div className="carousel-item">
            <img src={b} className="d-block w-100" alt="not found" />
          </div>
          <div className="carousel-item">
            <img src={c} className="d-block w-100" alt="not found" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
