import React from "react";
import "./ProductsWrapper.css";
import AddProduct from "./AddProduct";
import DisplayWrapper from "./DisplayWrapper";

const ProductsWrapper = () => {
  return (
    <div className="products-wrapper">
      <DisplayWrapper></DisplayWrapper>
      <AddProduct></AddProduct>
    </div>
  );
};

export default ProductsWrapper;
