import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Product.css";
import {
  deleteProduct,
  editProduct,
  addToCart,
  addToWishlist,
} from "../redux/actions/Actions";
import EditModal from "./EditModal";

const Product = (props) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [productWishlisted, setProductWishlisted] = useState(false);
  const didMountCart = useRef(false);
  const didMountWishlist = useRef(false);

  const quantityHandler = (operation) => {
    if (operation === "decrement") {
      setCartQuantity(cartQuantity - 1);
    } else {
      setCartQuantity(cartQuantity + 1);
    }
  };

  useEffect(() => {
    if (didMountCart.current) {
      dispatch(
        addToCart({
          quantity: cartQuantity,
          product: props,
        })
      );
    } else {
      didMountCart.current = true;
    }
  }, [cartQuantity]);

  useEffect(() => {
    if (didMountWishlist.current) {
      dispatch(
        addToWishlist({
          isWishlisted: productWishlisted,
          product: props,
        })
      );
    }else {
      didMountWishlist.current = true;
    }
  }, [productWishlisted]);

  // const addQuantityToCart = () => {
  //   dispatch(addToCart({
  //     cartQuantity: cartQuantity,
  //     product: props
  //   }))
  // }

  return (
    <>
      <div className="product-container">
        <div className="product-image">
          <img src={props.image} alt="image" />
        </div>
        <div className="product-details">
          <div className="product-name product-detail" id="product-name">
            {props.name}
          </div>
          <div
            className="product-description product-detail"
            id="product-description"
          >
            {props.description}
          </div>
          <div className="ratings product-detail" id="ratings">
            {props.ratings}
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="product-price product-detail" id="product-price">
            &#x20B9;{props.price}
          </div>
          <div className="category product-detail" id="category">
            {props.category}
          </div>

          <div className="product-utilities product-detail">
            <div className="delete-icon product-utility" id="delete-icon">
              <i
                className="fa-solid fa-trash-can"
                onClick={() => dispatch(deleteProduct(props.id))}
              ></i>
            </div>
            <div className="edit-icon product-utility" id="edit-icon">
              <i
                className="fa-solid fa-pen-to-square"
                onClick={() => {
                  dispatch(editProduct(props));
                  setShowModal(true);
                }}
              ></i>
            </div>
            <div className="add-to-cart product-utility" id="add-to-cart">
              <button
                className="cart-minus"
                onClick={() => quantityHandler("decrement")}
                disabled={cartQuantity ? false : true}
              >
                -
              </button>
              <span className="cartQuantity">{cartQuantity}</span>
              <button
                className="cart-plus"
                onClick={() => quantityHandler("increment")}
              >
                +
              </button>
              {/* <button disabled={cartQuantity ? false : true} onClick={addQuantityToCart}>Add to Cart</button> */}
            </div>
            <div
              className="add-to-wishlist-icon product-utility"
              id="add-to-wishlist-icon"
            >
              <i
                className="fa-regular fa-heart"
                onClick={() => setProductWishlisted(!productWishlisted)}
              ></i>
              {productWishlisted && (
                <i
                  className={`fa-solid fa-heart`}
                  onClick={() => setProductWishlisted(!productWishlisted)}
                ></i>
              )}
            </div>
          </div>
        </div>
      </div>
      {showModal && <EditModal id={props.id}></EditModal>}
    </>
  );
};

export default Product;
