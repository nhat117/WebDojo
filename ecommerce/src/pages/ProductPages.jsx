import React from "react";
import Announce from "../components/Announce";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";

const ProductPages = () => {
  return (
    <div>
      <div className='flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3'>
        <div className='flex flex-1 items-center justify-center'>
          <img
            className='w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-200'
            src='https://i.ibb.co/7CQVJNm/jean.jpg'
            alt='jean'
          />
        </div>
        <div className='flex-[1.3] flex flex-col mt-10 items-start justify-items-start mobile:items-center '>
          <h2 className='title text-[40px] mobile:text-[30px]'>Hoody 100% cotton</h2>
          <p className='pr-[4rem] text-justify mt-4 mobile:pr-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione modi similique
            totam quis dolore, mollitia, temporibus eaque praesentium eligendi voluptate quibusdam
          </p>
          <div className='flex flex-col place-self start'>
            <p className='mt-7 text-3xl'>
              Price: <b>$70</b>
            </p>
            {/* color variant */}
            <div className='flex text-2xl mt-7'>
              Colors
              <div className='bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] ml-5 cursor-pointer hover:border-[#8a4af3]'></div>
              <div className='bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] ml-5 cursor-pointer hover:border-[#8a4af3]'></div>
              <div className='bg-yellow-400 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] ml-5 cursor-pointer hover:border-[#8a4af3]'></div>
            </div>
            <div className='mt-7 text-2xl'>
              Size
              <select className='ml-5 border-2' name='' id=''>
                <option selected disabled>
                  Select
                </option>
                <option value=''>Small</option>
                <option value=''>Medium</option>
                <option value=''>Large</option>
              </select>
            </div>
            <div className='mt-5'>
              <Counter />
            </div>
          </div>
          <button className='text-white bg-[#8a4af3] rounded-md shadow-md mt-[30px] p-3'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPages;
