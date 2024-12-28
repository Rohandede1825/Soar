import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa6";

const Navbar = () => {

  const toggleMenu = () => {
    const menu = document.querySelector('.menuOption');
    if (menu) menu.classList.toggle('hidden');
  };

  function Hamburger() {
    let menu = document.querySelector('.menuOption');
    menu.classList.toggle('hidden');
  }

  return (
    <header className="w-full h-[101px] bg-white flex items-center justify-between px-6 shadow-md fixed top-0 left-0 z-50">
      
      {/* Logo Section */}
      <div className=" items-center space-x-3 flex-1  hidden lg:flex">
        <FaClipboardList className="text-4xl text-gray-800" />
        <span className="text-2xl lg:text-xl font-bold text-gray-800">Soar Task</span>
      </div>
      {/* Center Section (Overview or Page Title) */}
    
      <div onClick={Hamburger} className='  text-3xl flex-auto md:hidden'>  <IoMdMenu /></div>
      <div className=" md:flex flex-1 justify-start mr-24 md:mr-72" >
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Overview</h1>
      </div>

      

      {/* Right Section (Search Bar and User Controls) */}
      <div className="flex items-center space-x-6 flex-1 justify-end">
        <button
          onClick={toggleMenu}
          className="text-3xl lg:hidden cursor-pointer focus:outline-none"
          aria-label="Toggle Menu"
        >
        </button>

        <input
          type="text"
          placeholder="Search for something"
          className="hidden md:block bg-gray-200 rounded-full py-2 px-4 w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <i className="fas fa-cog text-2xl text-gray-500 cursor-pointer hover:text-gray-800"></i>
        <i className="fas fa-bell text-2xl text-gray-500 cursor-pointer hover:text-gray-800"></i>
        <img
          src="https://via.placeholder.com/40"
          alt="User profile"
          className="rounded-full cursor-pointer hover:opacity-80"
          width="40"
          height="40"
        />
      </div>
    </header>
  );
};

export default Navbar;
