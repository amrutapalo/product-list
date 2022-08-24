import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./DisplayWrapper.css";
import Filter from "./Filter";
import ProductList from "./ProductList";


const DisplayWrapper = () => {
  const productList = useSelector((state) => state.productReducer.productList);
  const [show, setShow] = useState(productList.length == 0 ? false : true);
  return (
    <div className="displayWrapper">
      {<Filter></Filter>}
      <ProductList></ProductList>
    </div>
  );
};

export default DisplayWrapper;
