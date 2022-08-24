import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import "./ProductList.css";

const ProductList = () => {
  const products = useSelector((state) =>
    state.productReducer.searchedProducts.length !== 0
      ? state.productReducer.searchedProducts
      : state.productReducer.productList
  );
  // const searchedProducts = useSelector((state) => state.searchReducer);

  console.log(products);
  // console.log(searchedProducts);

  return (
    <div className="productList">
      {products.map((element) => (
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
      ))}
    </div>
  );
};

export default ProductList;
