import React from "react";
import { useDispatch } from "react-redux";
import "./Product.css";
import {deleteProduct} from '../redux/actions/Actions'

const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={props.image} alt="image" />
      </div>
      <div className="product-name" id="product-name">
        {props.name}
      </div>
      <div className="product-description" id="product-description">
        {props.description}
      </div>
      <div className="product-price" id="product-price">
        {props.price}
      </div>
      <div className="category" id="category">
        {props.category}
      </div>
      <div className="ratings" id="ratings">
        {props.ratings}
      </div>
      <div className="delete-icon" id="delete-icon">
        <i className="fa-solid fa-trash-can" onClick={() => dispatch(deleteProduct(props.id))}></i>
      </div>
      <div className="edit-icon" id="edit-icon">
        <i className="fa-solid fa-pen-to-square"></i>
      </div>
      <div className="add-to-cart" id="add-to-cart">
        <button className="cart-minus">-</button>
        Add to Cart
        <button className="cart-plus">+</button>
      </div>
      <div className="add-to-wishlist-icon" id="add-to-wishlist-icon">
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-heart"></i>
      </div>
    </div>
  );
};

export default Product;
