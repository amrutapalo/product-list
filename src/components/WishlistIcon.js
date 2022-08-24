import React from "react";
import { useSelector } from "react-redux";

const WishlistIcon = () => {
  const quantity = useSelector((state) => state.productReducer.totalWishlist);

  return (
    <div className="wishlist-icon">
      <i className="fa-solid fa-heart icon-component"></i>
      <span className="wishList icon-component">WishList</span>
      <span className="wishlist-number icon-component">{quantity}</span>
    </div>
  );
};

export default WishlistIcon;
