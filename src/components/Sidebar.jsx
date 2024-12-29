import React, { useState } from 'react';
import { TiHome } from "react-icons/ti";
import { GrTransaction } from "react-icons/gr";
import { MdManageAccounts, MdMiscellaneousServices } from "react-icons/md";
import { RiStockFill } from "react-icons/ri";
import { TbCreditCardFilled } from "react-icons/tb";
import { FaHandHoldingUsd } from "react-icons/fa";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { IoIosSettings } from "react-icons/io";
import ProfileForm from './ProfileForm'; // Import your ProfileForm component

const Sidebar = () => {
  const [currentComponent, setCurrentComponent] = useState(ProfileForm); // State to manage the current component

  const handleSettingsClick = () => {
    setCurrentComponent(<ProfileForm />); // Set the ProfileForm component when "Settings" is clicked
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className="menuOption bg-white w-[240px] h-[100vh] p-6 shadow-md mt-20 fixed top-0 left-0"
      >
        <nav>
          <ul className="md:text-xl md:space-y-5 text-2xl space-y-6">
            {[
              { icon: <TiHome />, label: "Dashboard", onClick: () => setCurrentComponent(null) },
              { icon: <GrTransaction />, label: "Transactions", onClick: () => setCurrentComponent(null) },
              { icon: <MdManageAccounts />, label: "Accounts", onClick: () => setCurrentComponent(null) },
              { icon: <RiStockFill />, label: "Investments", onClick: () => setCurrentComponent(null) },
              { icon: <TbCreditCardFilled />, label: "Credit Cards", onClick: () => setCurrentComponent(null) },
              { icon: <FaHandHoldingUsd />, label: "Loans", onClick: () => setCurrentComponent(null) },
              { icon: <MdMiscellaneousServices />, label: "Services", onClick: () => setCurrentComponent(null) },
              { icon: <VscLightbulbSparkle />, label: "My Privileges", onClick: () => setCurrentComponent(<ProfileForm/>) },
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
          <div className="text-gray-600">
            <h1 className="text-2xl font-bold">Welcome</h1>
            <p>Select an option from the menu to display content here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
