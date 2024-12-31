import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import { VscThreeBars } from "react-icons/vsc";
import Dashboard from "./Home";

const Navbar = () => {
  const [showNewComponent, setShowNewComponent] = useState(false);

  // Toggle sidebar visibility for the hamburger menu
 

  // Function to handle click on the FaClipboardList icon
  const handleIconClick = () => {
    setShowNewComponent((prevState) => !prevState); // Toggles the state
  };

  const ShowMenu =()=>{
    const a= document.getElementsByClassName('TreeLine')
    a.click
  }

  return (
    <header className="w-full h-[101px] bg-white flex items-center justify-between px-6 shadow-md fixed top-0 left-0 z-50">
      {/* Logo Section */}
      <div className="items-center space-x-3 flex-1 hidden lg:flex">
        <FaClipboardList
          onClick={handleIconClick}
          className="text-4xl text-gray-800 cursor-pointer"
          aria-label="Toggle Sidebar"
        />
        <span className="text-2xl text-gray-800 cursor-pointer sm:text-3xl md:text-4xl lg:text-3xl">Soar Task</span>
      </div>

      {/* Center Section (Overview or Page Title) */}
      <div onClick={ShowMenu} className="ThreeLine text-3xl gap-7"><VscThreeBars /></div>
      <div className="md:flex flex-1 justify-start mr-24 md:mr-72">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Overview</h1>
      </div>

      {/* Right Section (Search Bar and User Controls) */}
      <div className="flex items-center space-x-6 flex-1 justify-end m-5">
        <input
          type="text"
          placeholder="Search for something"
          className="hidden md:block bg-gray-200 rounded-full py-2 px-4 w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Search"
        />
        <i className="fas fa-cog text-2xl text-gray-500 cursor-pointer hover:text-gray-800" aria-label="Settings"></i>
        <i className="fas fa-bell text-2xl text-gray-500 cursor-pointer hover:text-gray-800" aria-label="Notifications"></i>
        <img
          src="https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=612x612&w=0&k=20&c=kfP1g2712RiaxsDriIxFo363ARlaL2D591s-22CnIo8="
          alt="User profile"
          className="rounded-full cursor-pointer hover:opacity-80"
          width="70"
          height="70"
        />
      </div>

      {/* Render new component if toggled */}
      {showNewComponent && <Sidebar />}
    </header>
  );
};

export default Navbar;
