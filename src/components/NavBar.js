import React from "react";
import Cart from "./CartIcon";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import Wishlist from "./WishlistIcon";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul>
          <li>
            <SearchBar></SearchBar>
          </li>
          <li>
            <Wishlist></Wishlist>
          </li>
          <li>
           <Cart></Cart>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;