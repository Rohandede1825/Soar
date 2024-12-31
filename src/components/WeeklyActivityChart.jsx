import React from 'react';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; 
import { BiFullscreen } from 'react-icons/bi';




const chartOptions = {
  responsive: true, // Enable responsiveness
  maintainAspectRatio: false, // Allow the chart to adjust to the container size
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        color: '#4B5563', // Gray text
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#4B5563', // Gray text
      },
    },
    y: {
      grid: {
        color: '#E5E7EB', // Light gray grid lines
      },
      ticks: {
        color: '#4B5563', // Gray text
      },
    },
  },
};




const WeeklyActivityChart = () => {

    const [chartData, setChartData] = useState({
  
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Deposit',
        data: [],
        backgroundColor: 'rgba(59, 130, 246, 0.7)', // Blue color
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
      {
        label: 'Withdraw',
        data: [],
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black color
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
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
              data: data.graphdataDeposit,
              
            },
            {
              ...prevData.datasets[1],
              data: data.graphdataWithdraw,
            }
          ],
        }));
      } catch (error) {
        console.error('Error fetching graph data:', error);
      }
    };

    fetchData();
  }, []);




  

  return (
    <div className="sw-full h-full rounded-lg bg-gray-200 shadow-lg p-4">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default WeeklyActivityChart;