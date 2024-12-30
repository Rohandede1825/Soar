import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const BalanceHistory = () => {
  const data = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: 'Balance',
        data: [100, 300, 500, 800, 300, 600, 700],
        fill: true,
        backgroundColor: 'rgba(0, 0, 255, 0.2)', // Light blue fill
        borderColor: 'blue',
        borderWidth: 2,
      },
    ],
  };

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

  return (
    <div className="w-full lg:w-[670px] h-[300px] lg:h-[330px] p-4 bg-gray-100 rounded-lg shadow-md">
      <Line data={data} options={options} />
    </div>
  );
};

export default BalanceHistory;
