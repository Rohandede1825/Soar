import React, { useState } from "react";
import { FaClipboardList } from "react-icons/fa6";
import { VscThreeBars } from "react-icons/vsc";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false); // State for Sidebar visibility

  // Function to toggle the Sidebar
  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <header className="w-full  h-[101px] bg-white flex items-center justify-between px-3 shadow-md fixed top-0 left-0 z-50">
      {/* Logo Section */}
      <div className="items-center space-x-3 flex-1 hidden lg:flex">
        <FaClipboardList />
        <span className="text-2xl text-gray-800 cursor-pointer sm:text-3xl md:text-4xl lg:text-2xl lg:font-bold">
          Soar Task
        </span>
      </div>

      {/* Center Section (Overview or Page Title) */}
      <div onClick={toggleSidebar} className="ThreeLine text-5xl gap-7 md:hidden">
        <VscThreeBars />
      </div>
      <div className="md:flex flex-1  mr-24 md:mr-72">
        <h1 className="text-3xl  md:text-2xl font-bold text-gray-800  ml-3">Overview</h1>
      </div>

      {/* Right Section (Search Bar and User Controls) */}
      <div className="flex items-center space-x-6 flex-1 justify-end">
        <input
          type="text"
          placeholder="Search for something"
          className="hidden md:block bg-gray-200 rounded-full py-2 px-4 w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Search"
        />
        <i
          className="fas fa-cog text-2xl text-gray-500 cursor-pointer hover:text-gray-800"
          aria-label="Settings"
        ></i>
        <i
          className="fas fa-bell text-2xl text-gray-500 cursor-pointer hover:text-gray-800"
          aria-label="Notifications"
        ></i>
        <img
          src="https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=612x612&w=0&k=20&c=kfP1g2712RiaxsDriIxFo363ARlaL2D591s-22CnIo8="
          alt="User profile"
          className="rounded-full cursor-pointer hover:opacity-80 ml-3 w-[60px] h-[60px] mr-7 md:w-[50px] md:[]"
          width=""
          height=""
        />
      </div>

      {/* Render Sidebar Component if toggled */}
      {showSidebar && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40" onClick={toggleSidebar}>
          {/* Sidebar Component */}
          <Sidebar/>
        </div>
      )}
    </header>
  );
};

export default Navbar;
