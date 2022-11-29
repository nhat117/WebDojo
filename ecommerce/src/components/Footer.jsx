import {
  Facebook,
  Instagram,
  LocationOnOutlined,
  Pinterest,
  Twitter,
  EmailOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  const iconStyle = "m-3 rounded-full cursor-pointer p-2 text-white";
  return (
    <div className='flex items-center justify-around p-2'>
      <div className='flex-1 flex-col flex-wrap p-2'>
        {/* Store information */}
        <h1 className='text-[25px]'>NhatBui</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium optio culpa, ipsa
          explicabo adipisci ducimus iste quod sint atque distinctio?
        </p>
      </div>
      <div className='flex items-center justify-center mt-3 self-start'>
        {/* Contact information  */}
        <div className={`${iconStyle} bg-blue-700`}>
          <Facebook />
        </div>
        <div className={`${iconStyle} bg-pink-500`}>
          <Instagram />
        </div>
        <div className={`${iconStyle} bg-sky-400`}>
          <Twitter />
        </div>
        <div className={`${iconStyle} bg-red-600`}>
          <Pinterest />
        </div>
      </div>
      <div className='flex-1 flex flex-col p-2'>
        <div className='flex m-3'>
          <LocationOnOutlined />
          <p className='pl-3'>State of California</p>
        </div>
        <div className='flex m-3'>
          <PhoneOutlined />
          <p className='pl-3'>012345467558</p>
        </div>
        <div className='flex m-3'>
          <EmailOutlined />
          <p className='pl-3'>fuschia@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
