import React from "react";

const Filter = () => {
  return <div className="filter-container">
    <i class="fa-solid fa-filter"></i>
    <select name="price-filter" id="price-filter" className="filter">
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>
    <span className="filter active">Ratings</span>
  </div>;
};

export default Filter;
