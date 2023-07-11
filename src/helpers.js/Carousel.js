import React from "react";
import a from "../pictures/a.jpg";
import b from "../pictures/b.jpg";
import c from "../pictures/c.jpg";
import Search from "./Search";

export default function Staters() {
  return (
    <div className="custom-container">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={c} className="d-block carousel-image" alt="pic_1" />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p> */}
              <Search/>
            </div>
          </div>
          <div className="carousel-item">
            <img src={a} className="d-block carousel-image" alt="pic_2" />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p> */}
              <Search/>
            </div>
          </div>
          <div className="carousel-item">
            <img src={b} className="d-block carousel-image" alt="pic_3" />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p> */}
              <Search/>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
