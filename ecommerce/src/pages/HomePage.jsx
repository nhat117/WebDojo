import React from "react";
import Announce from "../components/Announce";
import Categories from "../components/Categories";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <div>
      <Announce />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default HomePage;
