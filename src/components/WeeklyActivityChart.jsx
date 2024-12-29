import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; 

const WeeklyActivityChart = () => {
  const chartData = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Deposit',
        data: [400, 200, 300, 500, 100, 300, 400],
        backgroundColor: 'rgba(59, 130, 246, 0.7)', // Blue color
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
      {
        label: 'Withdraw',
        data: [500, 300, 400, 450, 200, 350, 450],
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black color
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

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

  return (
    <div className="sw-full h-full rounded-lg bg-gray-200 shadow-lg p-4">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default WeeklyActivityChart;