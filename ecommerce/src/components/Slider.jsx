import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { SliderAPI } from "../apifolder/SliderApi";
import './Slider.css'
const Slider = () => {
  const [slides] = useState(SliderAPI);
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide(activeSlide === slides.length-1 ? 0 : activeSlide + 1);
  };

  const prevSlide = () => {
    setActiveSlide(activeSlide === 0 ? slides.length-1 : activeSlide - 1);
  };

  //Style
  const sliderStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer";
  return (
    <div className='parentDiv h-[540px] bg-white flex items-center justify-between'>
      <div className={`leftarrow ${sliderStyle}`} onClick={prevSlide}>
        <ArrowLeftOutlined style={{ fontSize: "50px", color: 'black'  }} />
      </div>
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative ${slide.background}`}
            >
              <div className='slide flex items-center justify-center'>
                <div className='forImage flex flex-1 justify-center items-center h-[100%]'>
                  <img className='h-[100%] object-cover' src={slide.src} alt='slide'></img>
                </div>
                <div className='des flex flex-col flex-1 place-items-start ml-11 justify-center'>
                  <h2 className='text-[30px]'>{slide.content.h2}</h2>
                  <p>{slide.content.p}</p>
                  <button className='btn'>Shop Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}
      <div className={`rightarrow ${sliderStyle}`} onClick={nextSlide}>
        <ArrowRightOutlined style={{ fontSize: "50px", color: 'black' }} />
      </div>
    </div>
  );
};

export default Slider;
