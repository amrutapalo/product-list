import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/actions/Actions";
import './SearchBar.css';

const SearchBar = () => {
  const searchRequest = useSelector((state) => state.productReducer.searchRequest);
  const dispatch = useDispatch();
  const ref = useRef();
  console.log(ref);
  console.log(searchRequest);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      searchProducts({
        expression: ref.current.elements.search.value,
        type: ref.current.elements.searchDropdown.value
      }
    ))
  };

  return (
    <div className="searchbar-container">
      <form ref={ref} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by name, category..."
          className="search"
          id="search"
        />
        <select name="searchDropdown" id="searchDropdown" className="searchDropdown" defaultValue="name">
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select>
        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
        
      </form>
    </div>
  );
};

export default SearchBar;
