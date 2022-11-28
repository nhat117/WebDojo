import { Search, ShoppingCartOutlined, TextFieldsOutlined } from "@mui/icons-material";
import { Badge, TextField } from "@mui/material";
import React from "react";

const NavBar = () => {
  const style = "text-[16px] ml-[10px] cursonr-pointer";
  return (
    <div className='navbar shadow-md relative z-10'>
      <div className='flex justify-between wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px]'>
        {/* Left div */}
        <div className='left flex flex-1 items-center'>
          <div className='language cursor-pointer text-[16px]'>En</div>
          <div className='focus-within:border-[#8a4af3] transition-all searchInput flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px]'>
            <input type='text' className='input outline-none' />
            <Search className='text-[20px] text-gray-500' />
          </div>
        </div>

        <div className='center flex flex-1 text-center mt-[4px]' color='primary'>
          <div className='logo font-bold text-lg'>Summer Kings</div>
        </div>
        {/* Right Div */}
        <div>
          <div className='right flex flex-1 items-center justify-end mt-[4px]'>
            <div className={style}>Login</div>
            <div className={style}>Register</div>
            <div className={style}>
              <Badge badgeContent={2} color='primary'>
                <ShoppingCartOutlined className='text-[20px] ml-[10px]' />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
