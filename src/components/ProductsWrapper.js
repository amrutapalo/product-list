import React from "react";
import "./ProductsWrapper.css";
import AddProduct from "./AddProduct";
import DisplayWrapper from "./DisplayWrapper";

const ProductsWrapper = () => {
  return (
    <div className="products-wrapper">
      <AddProduct></AddProduct>
      <DisplayWrapper></DisplayWrapper>
    </div>
  );
};

export default ProductsWrapper;
