import React from "react";
import TopProductsAPI from "../apifolder/TopProductsAPI";
import Product from "./Product";
const Products = () => {
  return TopProductsAPI.map((product, index) => {
    return <Product product={product} key={index} />;
  });
};

export default Products;
