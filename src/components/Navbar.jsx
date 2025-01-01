import React, { useState } from "react";
import { FaClipboardList } from "react-icons/fa6";
import { VscThreeBars } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io"; // Close Icon
import Sidebar from "./Sidebar.jsx";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { SlSettings } from "react-icons/sl";

import { TiHome } from "react-icons/ti";
import { GrTransaction } from "react-icons/gr";
import { MdManageAccounts, MdMiscellaneousServices } from "react-icons/md";
import { RiStockFill } from "react-icons/ri";
import { TbCreditCardFilled } from "react-icons/tb";
import { FaHandHoldingUsd } from "react-icons/fa";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { IoIosSettings } from "react-icons/io";
import ProfileForm from "./ProfileForm"; // Import your ProfileForm component
import Home from "./Home.jsx";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false); // State for Sidebar visibility
  const [showMenuOption, setShowMenuOption] = useState(false); // State for MenuOption visibility
  const [currentComponent, setCurrentComponent] = useState(false); // State to manage current component rendering

  // Function to toggle the Sidebar
  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  // Function to toggle MenuOption for small screens
  const toggleMenuOption = () => {
    setShowMenuOption((prevState) => !prevState);
    document.body.style.overflow = showMenuOption ? "auto" : "hidden"; // Prevent scrolling when menu is open
  };

  const handleSettingsClick = () => {
    setCurrentComponent(<ProfileForm />); // Set the ProfileForm component when "Settings" is clicked
  };

  return (
    <header className="w-full h-[101px] bg-white flex items-center justify-between px-3 shadow-md fixed top-0 left-0 z-50">
      {/* Logo Section */}
      <div className="items-center space-x-3 flex-1 hidden lg:flex">
        <FaClipboardList />
        <span className="text-2xl text-gray-800 cursor-pointer sm:text-3xl md:text-4xl lg:text-2xl lg:font-bold">
          Soar Task
        </span>
      </div>

      {/* Center Section (Overview or Page Title) */}
      <div onClick={toggleSidebar} className="ThreeLine text-4xl gap-7 md:hidden">
        <VscThreeBars onClick={toggleMenuOption} />
      </div>
      <div className="md:flex flex-1 mr-24 md:mr-72">
        <h1 className="text-3xl md:text-2xl font-bold text-gray-600 ml-3 md:mr-[480px]">Overview</h1>
      </div>

      {/* Right Section (Search Bar and User Controls) */}
      <div className="flex items-center space-x-6 flex-1 justify-end">
        <input
          type="text"
          placeholder=" Search for something"
          className="hidden md:block bg-gray-200 rounded-full py-2 px-4 w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-400 border-blue-400"
          aria-label="Search"
        />
        <IoIosNotificationsOutline className="text-4xl text-blue-500 cursor-pointer hover:text-gray-800 hidden md:block" />
        <SlSettings className="text-3xl text-blue-500 cursor-pointer hover:text-gray-800 hidden md:block" />
        <img
          src="https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=612x612&w=0&k=20&c=kfP1g2712RiaxsDriIxFo363ARlaL2D591s-22CnIo8="
          alt="User profile"
          className="rounded-full cursor-pointer hover:opacity-80 ml-3 w-[60px] h-[60px] mr-7 md:w-[60px] md:[h-50]"
        />
      </div>

      {/* Render Sidebar Component if toggled */}
      {showSidebar && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40">
          <div className="fixed top-0 left-0 w-64 h-full bg-white   shadow-lg ">
            <Sidebar toggleSidebar={toggleSidebar} />
          </div>
        </div>
      )}

      {/* Render MenuOption Component if toggled */}
      {showMenuOption && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className=" w-[240px] h-full p-6 shadow-md relative">
            {/* Close Icon */}
            <IoMdClose
              className="absolute top-4 right-4 text-2xl text-gray-800 cursor-pointer hover:text-red-600"
              onClick={toggleMenuOption}
            />
            <nav>
              <ul className="text-xl font-semibold">
                {[
                  { icon: <TiHome />, label: "Dashboard", onClick: () => setCurrentComponent(<Home />) },
                  { icon: <GrTransaction />, label: "Transactions", onClick: () => setCurrentComponent(null) },
                  { icon: <MdManageAccounts />, label: "Accounts", onClick: () => setCurrentComponent(null) },
                  { icon: <RiStockFill />, label: "Investments", onClick: () => setCurrentComponent(null) },
                  { icon: <TbCreditCardFilled />, label: "Credit Cards", onClick: () => setCurrentComponent(null) },
                  { icon: <FaHandHoldingUsd />, label: "Loans", onClick: () => setCurrentComponent(null) },
                  { icon: <MdMiscellaneousServices />, label: "Services", onClick: () => setCurrentComponent(null) },
                  { icon: <VscLightbulbSparkle />, label: "My Privileges", onClick: () => setCurrentComponent(null) },
                  { icon: <IoIosSettings />, label: "Settings", onClick: handleSettingsClick },
                ].map((item, index) => (
                  <li key={index} className="mb-4">
                    <a
                      className="flex items-center  hover:text-blue-600 cursor-pointer"
                      onClick={item.onClick}
                    >
                      {item.icon}
                      <span className="ml-3 font-medium">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
