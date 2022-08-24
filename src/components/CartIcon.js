import React from "react";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const quantity = useSelector((state) => state.productReducer.totalCart);

  return (
    <div className="cart-icon">
      <i className="fa fa-shopping-cart icon-component" aria-hidden="true"></i>
      <span className="cart icon-component">Cart</span>
      <span className="cart-number icon-component">{quantity}</span>
    </div>
  );
};

export default CartIcon;
