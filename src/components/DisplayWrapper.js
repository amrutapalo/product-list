import React from "react";
import "./DisplayWrapper.css";
import Menu from "./Menu";
import ProductList from "./ProductList";

const DisplayWrapper = () => {
  return (
    <>
      <Menu></Menu>
      <ProductList></ProductList>
    </>
  );
};

export default DisplayWrapper;
