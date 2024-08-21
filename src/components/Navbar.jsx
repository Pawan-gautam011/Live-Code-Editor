import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { CiDark } from "react-icons/ci";
import { GoSun } from "react-icons/go";

const Navbar = () => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
      document.body.style.backgroundColor = savedMode === 'light' ? 'rgb(255,255,255)' : 'rgb(17,24,39)';
    }
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'light' ? 'rgb(255,255,255)' : 'rgb(17,24,39)';
    localStorage.setItem('mode', newMode); 
  };

  return (
    <div className={`main flex flex-wrap justify-between items-center px-4 py-4  ${mode === 'light' ? 'bg-white text-black border' : 'bg-gray-800 text-white'}`}>
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
