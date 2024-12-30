import React, { useState } from 'react';
import { TiHome } from "react-icons/ti";
import { GrTransaction } from "react-icons/gr";
import { MdDisabledByDefault, MdManageAccounts, MdMiscellaneousServices } from "react-icons/md";
import { RiStockFill } from "react-icons/ri";
import { TbCreditCardFilled } from "react-icons/tb";
import { FaHandHoldingUsd } from "react-icons/fa";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { IoIosSettings } from "react-icons/io";
import ProfileForm from './ProfileForm'; // Import your ProfileForm component
import Dashboard from './dashboard';


const Sidebar = () => {
  const [currentComponent, setCurrentComponent] = useState(); // State to manage the current component

  const handleSettingsClick = () => {
    setCurrentComponent(<ProfileForm/>); // Set the ProfileForm component when "Settings" is clicked
  };

  

  return (
    <div className="  hidden md:flex md:flex-row md:h-screen md:overflow-hidden"> 
      {/* Sidebar */}
      <div
        className="menuOption bg-white w-[240px] h-[100vh] p-6 shadow-md mt-20 fixed top-0 left-0 hidden md:block"
      >
        <nav>
          <ul className="md:text-xl  text-2xl  font-semibold">
            {[
              {
                 icon: <TiHome />, 
                 label: "Dashboard", 
                 MdDisabledByDefault: () => setCurrentComponent(<Dashboard/>),
                 onClick: () => setCurrentComponent(<Dashboard/>) },
              { icon: <GrTransaction />, label: "Transactions", onClick: () => setCurrentComponent(null) },
              { icon: <MdManageAccounts />, label: "Accounts", onClick: () => setCurrentComponent(null) },
              { icon: <RiStockFill />, label: "Investments", onClick: () => setCurrentComponent(null) },
              { icon: <TbCreditCardFilled />, label: "Credit Cards", onClick: () => setCurrentComponent(null) },
              { icon: <FaHandHoldingUsd />, label: "Loans", onClick: () => setCurrentComponent(null) },
              { icon: <MdMiscellaneousServices />, label: "Services", onClick: () => setCurrentComponent(null) },
              { icon: <VscLightbulbSparkle />, label: "My Privileges", onClick: () => setCurrentComponent(null) },
              { 
                icon: <IoIosSettings />, 
                label: "Settings", 
                onClick: handleSettingsClick 
              },
            ].map((item, index) => (
              <li key={index} className="mb-4">
                <a
                  className="flex items-center text-gray-800 hover:text-blue-600 cursor-pointer"
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

      {/* Main Content */}
      <div className="ml-[240px] p-6 flex-grow">
        {currentComponent || (
           <div className="absolute w-[1110px] h-[1020px] top-[125px] left-[290px] flex gap-[30px] opacity-0">
          <Dashboard/>
         </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
