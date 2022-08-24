import React from "react";
import { useSelector } from "react-redux";


const WishlistIcon = () => {
  const quantity = useSelector((state) => state.productReducer.wishlist);
  
  return (
    <>
      <i className="fa-solid fa-heart"></i>
      <span className="wishlist-number">{quantity}</span>
      <span className="wishList">WishList</span>
    </>
  );
};

export default WishlistIcon;
