import React from "react";
import "./DisplayWrapper.css";
import Filter from "./Filter";
import ProductList from "./ProductList";

const DisplayWrapper = () => {
  return (
    <div className="displayWrapper">
      {/* <Filter></Filter> */}
      <ProductList></ProductList>
    </div>
  );
};

export default DisplayWrapper;
