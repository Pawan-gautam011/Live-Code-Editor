import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { CiDark } from "react-icons/ci";
import { GoSun } from "react-icons/go";

const Navbar = () => {
  
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17,24,39)';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'rgb(255,255,255)';
    }
  };

  return (
    <div className={`main flex flex-wrap justify-between items-center px-4 py-4 ${mode === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <div className='logo font-bold text-2xl flex items-center w-auto'>
        <img className='w-44' src={logo} alt="Logo" />
      </div>
      <div className='icons flex justify-end items-center space-x-4 w-auto'>
        {mode === 'light' ? (
          <CiDark onClick={toggleMode} className='text-2xl cursor-pointer' />
        ) : (
          <GoSun onClick={toggleMode} className='text-2xl cursor-pointer' />
        )}
      </div>
    </div>
  );
}

export default Navbar;
