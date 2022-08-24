import React from "react";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const quantity = useSelector((state) => state.productReducer.totalCart);

  return (
    <>
      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      <span className="cart-number">{quantity}</span>
      <span className="cart">Cart</span>
    </>
  );
};

export default CartIcon;
