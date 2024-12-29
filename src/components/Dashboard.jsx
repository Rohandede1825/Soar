import React from "react";
import { FaCreditCard, FaPaypal, FaMoneyBillWave } from "react-icons/fa";
import { FcSimCardChip } from "react-icons/fc";
import WeeklyActivityChart from "./WeeklyActivityChart.jsx";
// import Piechart from "./PieChart.jsx"
import PieChart from "./PieChart.jsx";
import QuickTransferComponent from "./QuickTransferComponent.jsx";
import BalanceHistory from "./BalanceHistory.jsx";


function Dashboard() {
    return (
        <div className="relative bg-gray-100 top-[125px] lg:left-[290px] lg:w-[1120px] w-full h-auto p-6 rounded-lg shadow-lg ">
            {/* Dashboard Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                {/* My Cards Section */}
                <div className="lg:col-span-2 opacity-100"> {/* You can adjust opacity here */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-800">My Cards</h2>
                        <a className="text-blue-500" href="#">
                            See All
                        </a>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">

                        {/* Card 1 */}
                        <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-7 rounded-2xl text-white w-[360px] max-w-[360px] h-[235px] opacity-100"> {/* You can adjust opacity here */}
                            <div className="flex justify-between">
                                <div>
                                    <span className="block text-sm">Balance</span>
                                    <span className="text-2xl font-bold">$5,756</span>
                                </div>
                                <FcSimCardChip className="text-5xl" />
                            </div>
                            <div className="flex justify-between mt-4">
                                <div>
                                    <span className="block text-sm">CARD HOLDER</span>
                                    <span className="text-lg">Eddy Cusuma</span>
                                </div>
                                <div>
                                    <span className="block text-sm">VALID THRU</span>
                                    <span className="text-lg">12/22</span>
                                </div>
                            </div>
                            <div className="text-lg mt-4">3778 **** **** 1234</div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-7 rounded-2xl w-full max-w-[360px] h-[235px] shadow opacity-100"> {/* You can adjust opacity here */}
                            <div className="flex justify-between">
                                <div>
                                    <span className="block text-sm">Balance</span>
                                    <span className="text-2xl font-bold">$5,756</span>
                                </div>
                                <FcSimCardChip className="text-5xl" />
                            </div>
                            <div className="flex justify-between mt-4">
                                <div>
                                    <span className="block text-sm">CARD HOLDER</span>
                                    <span className="text-lg">Eddy Cusuma</span>
                                </div>
                                <div>
                                    <span className="block text-sm">VALID THRU</span>
                                    <span className="text-lg">12/22</span>
                                </div>
                            </div>
                            <div className="text-lg mt-4">3778 **** **** 1234</div>
                        </div>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div>
                    <h2 className="text-lg font-bold flex mb-6">Recent Transactions</h2>
                    <div className="bg-white  w-[360px] h-[235px] p-4 rounded-lg shadow  justify-between overflow-hidden mt-4 ">
                        {[{
                            icon: <FaCreditCard className="text-yellow-500" />,
                            label: "Deposit from Card",
                            amount: "-$850",
                            date: "28 Jan 2021",
                        },
                        {
                            icon: <FaPaypal className="text-blue-500" />,
                            label: "Deposit Paypal",
                            amount: "+$2,500",
                            date: "25 Jan 2021",
                        },
                        {
                            icon: <FaMoneyBillWave className="text-teal-500" />,
                            label: "Jemi Wilson",
                            amount: "+$5,400",
                            date: "21 Jan 2021",
                        }
                        ].map((txn, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-gray-50 p-2 rounded-lg shadow-sm justify-center mb-2"
                            >
                                <div className="bg-gray-100 p-3 rounded-full">{txn.icon}</div>
                                <div className="ml-4">
                                    <h3 className="text-gray-800 font-medium">{txn.label}</h3>
                                    <p className="text-gray-500 text-sm">{txn.date}</p>
                                </div>
                                <div
                                    className={`ml-auto font-bold ${txn.amount.startsWith("+")
                                        ? "text-green-500"
                                        : "text-red-500"
                                        }`}
                                >
                                    {txn.amount}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Weekly Activity Chart */}
                <div
                    className=" w-96 md:96 lg:w-[730px] h-[367px] gap-[18px] bg-gray-200 rounded-lg"
                    style={{ display: "flex", flexDirection: "column" }} >
                    <  WeeklyActivityChart />
                </div>


                <div
                    className="w-635px h-auto"
                    style={{ display: "flex" }}
                >
                </div>
                <PieChart />

                <div class=" gap-[10px] bg-gray-100 rounded-lg">
                <h2 className="text-2xl font-semibold mt-10 mb-10 ">Quick Transfer</h2>
                        <div>
                    <QuickTransferComponent />
                        </div>
                            
                </div>

                <div>

                    <div className="text-2xl font-semibold mt-3">Balance History</div>
                    <div className="  lg:w-[650px] h-[330px] gap-[18px] bg-gray-200 rounded-lg">
                        <div>
                            <BalanceHistory />
                        </div>
                        {/* Your content here */}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;