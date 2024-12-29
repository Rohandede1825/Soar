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
  };

  return (
    <div className="w-670px  gap-20">
      <Line data={data} options={options} />
    </div>
  );
};

export default BalanceHistory;