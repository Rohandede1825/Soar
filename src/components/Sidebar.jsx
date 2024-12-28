import React from 'react';
import { TiHome } from "react-icons/ti";
import { GrTransaction } from "react-icons/gr";
import { MdManageAccounts, MdMiscellaneousServices } from "react-icons/md";
import { RiStockFill } from "react-icons/ri";
import { TbCreditCardFilled } from "react-icons/tb";
import { FaHandHoldingUsd } from "react-icons/fa";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { IoIosSettings } from "react-icons/io";

function Hamburger() {
  let menu = document.querySelector('.menuOption');
  menu.classList.toggle('hidden');
}

const Sidebar = () => {
  return (
    <div
      className="menuOption bg-white w-[240px] h-[1100px] p-6  lg:block shadow-md  mt-20 fixed top-0 left-0  hidden " >
      <div className="flex items-center justify-between mb-8 lg:justify-start">
        {/* Title Section - Uncomment if needed */}
        {/* <h1 className="text-2xl font-bold text-gray-800">Menu</h1> */}
      </div>
      <nav>
        <ul  onClick={Hamburger} className=" menuOption md:text-xl md:space-y-5 text-2xl space-y-6">
          {[
            { icon: <TiHome />, label: "Dashboard" },
            { icon: <GrTransaction />, label: "Transactions" },
            { icon: <MdManageAccounts />, label: "Accounts" },
            { icon: <RiStockFill />, label: "Investments" },
            { icon: <TbCreditCardFilled />, label: "Credit Cards" },
            { icon: <FaHandHoldingUsd />, label: "Loans" },
            { icon: <MdMiscellaneousServices />, label: "Services" },
            { icon: <VscLightbulbSparkle />, label: "My Privileges" },
            { icon: <IoIosSettings />, label: "Settings" },
          ].map((item, index) => (
            <li key={index} className="mb-4">
              <a className="flex items-center text-gray-800 hover:text-blue-600" href="#">
                {item.icon}
                <span className="ml-3 font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
