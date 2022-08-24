import React from "react";
import { useDispatch } from "react-redux";
import { sortProducts } from "../redux/actions/Actions";
import "./DisplayWrapper.css";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="filter-container"
      onChange={(event) => dispatch(sortProducts(event.target.value))}
    >
      <i class="fa-solid fa-filter"></i>
      <select
        name="price-filter"
        id="price-filter"
        className="filter"
        onchange="handleFilter(this)"
      >
        <option disabled selected>
          Sort
        </option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default Filter;
