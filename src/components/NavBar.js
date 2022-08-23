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
            <span className="wishlist-number">0</span>
            <span className="wishList">WishList</span>
          </li>
          <li>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className="cart-number">0</span>
            <span className="cart">Cart</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
