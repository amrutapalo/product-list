import React from "react";
import "./NavBar.css";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul>
          <li>
            <SearchBar></SearchBar>
          </li>
          <li>
            <i className="fa-solid fa-heart"></i>
            <div className="wishList">WishList</div>
          </li>
          <li>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <div className="Cart">Cart</div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
