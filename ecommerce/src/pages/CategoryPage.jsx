import React from "react";
import Announce from "../components/Announce";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <div>
      <Announce />
      <NavBar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px]">Men's</h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex mobile:flex-col ">
            <p>Filter by</p>
            <select className="ml-3 border-2 border-silver">
              <option selected disabled>
                Size
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <select className="ml-3 border-2 border-silver mobile:mt-3 ">
              <option selected disabled>Color</option>
              <option value="">Yellow</option>
              <option value="">Yellow</option>
            </select>
          </div>
          <div className="flex">
            <p>Sort by</p>
            <select className="ml-3 border-2 border-silver" name="" id="">
              <option value="">Newset (first) </option>
              <option value="">Oldest (first)</option>
              <option value="">Price (ASC)</option>
              <option value="">Price (DESC)</option>
            </select>
          </div>
        </div>
      </div>
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default HomePage;
