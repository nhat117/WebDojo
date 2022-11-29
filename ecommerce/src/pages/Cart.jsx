import React from "react";
import Announce from "../components/Announce";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";

const Cart = () => {
  return (
    <div>
      <Announce />
      <NavBar />
      <div className='p-5'>
        <div className='flex justify-center text-5xl'>My Cart</div>
        <div className='flex items-center justify-between mt-4 mobile:flex-col'>
          <button className='btn bg-white hover:text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white'>
            Continue Shopping
          </button>
          <div className='flex underline text-lg hover:cursor-pointer mobile:mt-3 mobile:mb-3'>
            <p>Items in my Cart : 3 </p>
            <p className='ml-5'>Whishlist Item: 0</p>
          </div>
          <button className='btn'>Checkout</button>
        </div>
        {/* Center div */}
        <div className='flex mt-7 mobile:flex-col'>
          <div className='flex flex-col flex-1'>
            {/* List of products */}
            <div className='flex w-[100%] h-auto items-center mobile:flex-col'>
              <div className='product flex self-start pl-5'>
                <img
                  className='w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-200'
                  src='https://i.ibb.co/7CQVJNm/jean.jpg'
                />
                <div className='description flex flex-col ml-5 mt-3 h-auto justify-between'>
                  <p>
                    <b className='mr-2'>ID:</b>123456789
                  </p>
                  <p>
                    <b className='mr-2'>Product:</b> Dazzling sky shirt
                  </p>
                  <p className='flex item-center justify-start'>
                    <b className='mr-2'>Color:</b>
                    <div className='rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]'></div>
                  </p>
                  <p>
                    <b className='mr-2'>Size: </b>M
                  </p>
                </div>
              </div>
              <div className='flex flex-col flex-auto justify-center items-center mobile:mt-3'>
                <Counter />
                <p className='flex items-center justify-center text-4xl mt-3'>
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className='mt-7 mb-7' />
            {/* 2nd product */}
            <div className='flex w-[100%] h-auto items-center mobile:flex-col'>
              <div className='product flex self-start pl-5'>
                <img
                  className='w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-200'
                  src='https://i.ibb.co/7CQVJNm/jean.jpg'
                />
                <div className='description flex flex-col ml-5 mt-3 h-auto justify-between'>
                  <p>
                    <b className='mr-2'>ID:</b>123456789
                  </p>
                  <p>
                    <b className='mr-2'>Product:</b> Dazzling sky shirt
                  </p>
                  <p className='flex item-center justify-start'>
                    <b className='mr-2'>Color:</b>
                    <div className='rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]'></div>
                  </p>
                  <p>
                    <b className='mr-2'>Size: </b>M
                  </p>
                </div>
              </div>
              <div className='flex flex-col flex-auto justify-center items-center mobile:mt-3'>
                <Counter />
                <p className='flex items-center justify-center text-4xl mt-3'>
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className='mt-7 mb-7' />
            {/* 3rd product */}
            <div className='flex w-[100%] h-auto items-center mobile:flex-col'>
              <div className='product flex self-start pl-5'>
                <img
                  className='w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-200'
                  src='https://i.ibb.co/7CQVJNm/jean.jpg'
                />
                <div className='description flex flex-col ml-5 mt-3 h-auto justify-between'>
                  <p>
                    <b className='mr-2'>ID:</b>123456789
                  </p>
                  <p>
                    <b className='mr-2'>Product:</b> Dazzling sky shirt
                  </p>
                  <p className='flex item-center justify-start'>
                    <b className='mr-2'>Color:</b>
                    <div className='rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]'></div>
                  </p>
                  <p>
                    <b className='mr-2'>Size: </b>M
                  </p>
                </div>
              </div>
              <div className='flex flex-col flex-auto justify-center items-center mobile:mt-3'>
                <Counter />
                <p className='flex items-center justify-center text-4xl mt-3'>
                  <b>$70</b>
                </p> 
              </div>
            </div>
            <hr className='mt-7 mb-7' />
          </div>
          <div className='flex-[0.5] w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg flex flex-col items-center p-5'>
            <h1 className='text-[2rem]'>Summary</h1>
            <div className='flex justify-between mt-3 w-[100%]'>
              <p>Subtotal</p>
              <p>$140</p>
            </div>
            <div className='flex justify-between mt-3 w-[100%]'>
              <p>Shipping Fee</p>
              <p>$20</p>
            </div>
            <div className='flex justify-between mt-3 w-[100%]'>
              <p>Shipping discount</p>
              <p>- $10</p>
            </div>
            <div className='text-3xl font-bold flex justify-between mt-3 w-[100%]'>
              <p>Total</p>
              <p>$150</p>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Cart;
