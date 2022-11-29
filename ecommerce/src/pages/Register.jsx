import React, { useState } from "react";

const Register = () => {
  const [loginInfo, setLoginInfo] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col absolute top-[30%] shadow-lg border-[2px] p-5 w-[30%]'>
        <text className='text-2xl'>Register</text>
        <div className='flex mt-3'>
          <input
            className='border-[2px] mr-2 rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
            placeholder='firstName'
            name='firstname'
            type='text'
            value={loginInfo.firstname}
            onChange={handleChange}
          />
          <input
            className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
            placeholder='lastName'
            name='lastname'
            type='text'
            value={loginInfo.lastname}
            onChange={handleChange}
          />
        </div>
        <div className='flex mt-3 '>
          <input
            className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
            placeholder='email'
            name='email'
            type='email'
            value={loginInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className='flex mt-3'>
          <input
            className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
            placeholder='username'
            name='username'
            type='text'
            value={loginInfo.username}
            onChange={handleChange}
          />
        </div>
        <div className='flex mt-3'>
          <input
            className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
            placeholder='password'
            name='password'
            type='password'
            value={loginInfo.password}
            onChange={handleChange}
          />
        </div>
        <div className='flex mt-3'>
          <input
            className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
            placeholder='confirm password'
            name='confirmPassword'
            type='password'
            value={loginInfo.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <input className='btn mt-7 hover:scale-[1.02]' type='button' value='Register' />
      </div>
    </div>
  );
};

export default Register;
