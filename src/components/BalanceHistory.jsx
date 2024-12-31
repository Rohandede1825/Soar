import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useState,useEffect } from 'react';


const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
  maintainAspectRatio: false, // Allow the chart to adjust height dynamically
};


const BalanceHistory = () => {

  const [chartData, setChartData] = useState({

    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: 'Balance',
        data: [],
        fill: true,
        backgroundColor: 'rgba(0, 0, 255, 0.2)', // Light blue fill
        borderColor: 'blue',
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/graphData');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setChartData((prevData) => ({
            ...prevData,
            datasets: [
              {
                ...prevData.datasets[0],
                data: data.weeklygraph || [10,20,30,80,50,60,70],
                
              },
              
            ],
          }));
        } catch (error) {
          console.error('Error fetching graph data:', error);
        }
      };
  
      fetchData();
    }, []);


  return (
    <div className="w-full lg:w-[670px] h-[300px] lg:h-[330px] p-4 bg-gray-100 rounded-lg shadow-md">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default BalanceHistory;
