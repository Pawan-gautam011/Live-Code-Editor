import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div
    className='main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#2f3640] py-4'>
        <div className='left'>
            <div className='logo font-bold text-2xl text-white text-center'>
                <img className='w-44' src={logo} alt="Logo" />

            </div>
        </div>

    </div>

  )
}

export default Navbar