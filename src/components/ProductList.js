import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import "./ProductList.css";

const ProductList = () => {
  const products = useSelector((state) => state.productReducer);
  console.log(products.productList);
  console.log(products)

  return (
    <div className="productList">
      {products.productList.map((element) => 
        <Product
          id={element.id}
          key={element.id}
          name={element.name}
          description={element.description}
          image={element.image}
          price={element.price}
          category={element.category}
          ratings={element.ratings}
        ></Product>
      )}
    </div>
  );
};

export default ProductList;
