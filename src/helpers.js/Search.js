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
        <span className="input-group-text border-0 " id="search-addon">
        <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
  );
}
