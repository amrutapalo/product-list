import React from "react";
import "./DisplayWrapper.css";
import Filter from "./Filter";
import ProductList from "./ProductList";

const DisplayWrapper = () => {
  return (
    <>
      <Filter></Filter>
      <ProductList></ProductList>
    </>
  );
};

export default DisplayWrapper;
