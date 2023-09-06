import React from "react";

export default function Search() {
  return (
    <div>
      <div className="input-group rounded">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span className=" search-button mx-2" id="search-addon">
        <i className="fa-solid fa-magnifying-glass fa-2xl" style={{color: "#176B87"}}></i>
        </span>
      </div>
    </div>
  );
}
