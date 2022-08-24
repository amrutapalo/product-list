import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Product.css";
import {
  deleteProduct,
  editProduct,
  addToCart,
} from "../redux/actions/Actions";
import EditModal from "./EditModal";

const Product = (props) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const quantityHandler = (operation) => {
    if (operation === "decrement") {
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    if (quantity) {
      dispatch(
        addToCart({
          quantity: quantity,
          product: props,
        })
      );
    }
  }, [quantity]);

  // const addQuantityToCart = () => {
  //   dispatch(addToCart({
  //     quantity: quantity,
  //     product: props
  //   }))
  // }

  return (
    <>
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
          <i
            className="fa-solid fa-trash-can"
            onClick={() => dispatch(deleteProduct(props.id))}
          ></i>
        </div>
        <div className="edit-icon" id="edit-icon">
          <i
            className="fa-solid fa-pen-to-square"
            onClick={() => {
              dispatch(editProduct(props));
              setShowModal(true);
            }}
          ></i>
        </div>
        <div className="add-to-cart" id="add-to-cart">
          <button
            className="cart-minus"
            onClick={() => quantityHandler("decrement")}
            disabled={quantity ? false : true}
          >
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button
            className="cart-plus"
            onClick={() => quantityHandler("increment")}
          >
            +
          </button>
          {/* <button disabled={quantity ? false : true} onClick={addQuantityToCart}>Add to Cart</button> */}
        </div>
        <div className="add-to-wishlist-icon" id="add-to-wishlist-icon">
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
      {showModal && <EditModal id={props.id}></EditModal>}
    </>
  );
};

export default Product;
