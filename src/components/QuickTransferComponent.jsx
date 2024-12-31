import React from 'react';
import { useState } from 'react';

const QuickTransferComponent = () => {
    const [amount, setAmount] = useState('');

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here (e.g., send the amount to a server)
        console.log('Transfer Amount:', amount);
    };

    return (
        <div className='bg-gray-100  rounded-lg'>


            <div className=" bg-white rounded-lg p-5">
                <div className="flex items-center mb-4 ">

                    <div className='flex justify-center items-center p-4'>



                        <div className=" items-center mr-3">
                            <img src="https://plus.unsplash.com/premium_photo-1683121067971-bf3efce082b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D" alt="User 1" className="w-12 h-12 rounded-full" />
                            <div className=''>
                                <p className="text-sm font-medium">Livia Bator</p>
                                <p className="text-xs text-gray-500">CEO</p>
                            </div>
                        </div>

                        <div className='items-center mr-3'>
                            <img src="https://plus.unsplash.com/premium_photo-1683121067971-bf3efce082b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D" alt="User 2" className="w-12 h-12 rounded-full" />
                            <div>
                                <p className="text-sm font-medium">Randy Press</p>
                                <p className="text-xs items-center justify-center text-gray-500 ">Director</p>
                            </div>
                        </div>


                        <div className='items-center justify-center'>
                            <img src="https://plus.unsplash.com/premium_photo-1683121067971-bf3efce082b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D" alt="User 3" className="w-12 h-12 rounded-full" />
                            <div className=''>
                                <p className="text-sm font-medium">Workman</p>
                                <p className="text-xs text-center text-gray-500">Designer</p>
                            </div>
                        </div>

                    </div>


                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
                <div className="flex items-center justify-start">
                    <div className='mr-6'>
                        <p className="text-sm font-medium">Write Amount</p>
                    </div>
                    <input type="text" placeholder="0.00" className="w-24 p-2 border border-gray-300 rounded-md" />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
                        <span>Send</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.75 2.25L2.25 14.75M5.25 9.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default QuickTransferComponent;


{/* <div className="w-445px h-auto gap-20"> 
<form onSubmit={handleSubmit}>
  <label htmlFor="amount">Amount:</label>
  <input 
    type="text" 
    id="amount" 
    value={amount} 
    onChange={handleAmountChange} 
  />
  <button type="submit">Send</button>
</form>
</div> */}