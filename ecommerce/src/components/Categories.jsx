import React, { useState } from "react";
import CategoryAPI from "../apifolder/CategoryAPI";"";
import Category from "./Category";
const Categories = () => {
  return (
    <div className='flex justify-between items-center p-5'>
      {CategoryAPI.map((category, index) => {
        return <Category item={category} key={index} />
      })}
    </div>
  );
};

export default Categories;
