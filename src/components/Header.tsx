"use client"
import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";


  const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className='container flex items-center gap-16 justify-center text-center w-full bg-black text-white px-[1440] h-12'>
        <div className="hidden md:block">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <b className='text-bold underline p-5 hover:bg-slate-600'>ShopNow</b></div>
        <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none"
      >
        English
        <RiArrowDropDownLine className="w-5 h-5 ml-2 text-gray-400" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-40 bg-black border border-gray-700 rounded-md shadow-lg">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <button
              className="block w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              role="menuitem"
              onClick={() => alert("English Selected")}
            >
              English
            </button>
            <button
              className="block w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              role="menuitem"
              onClick={() => alert("Spanish Selected")}
            >
              Spanish
            </button>
            <button
              className="block w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              role="menuitem"
              onClick={() => alert("French Selected")}
            >
              French
            </button>
          </div>
        </div>
      )}
        
    </div>
    </div>
  )
}

export default Header