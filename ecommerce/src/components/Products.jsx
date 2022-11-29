import React from "react";
import TopProductsAPI from "../apifolder/TopProductsAPI";
import Product from "./Product";
const Products = () => {
  return (
    <div className="p-5 flex flex-wrap">
      {TopProductsAPI.map((product, index) => {
         return <Product product={product} key={index} />;
      })}
    </div>
  );
};

export default Products;
