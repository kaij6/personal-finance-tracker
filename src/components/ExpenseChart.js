import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseChart = ({ transactions }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Expense Overview',
      },
    },
  };

  const data = {
    labels: transactions.map((transaction) => transaction.date),
    datasets: [
      {
        label: 'Expenses',
        data: transactions.map((transaction) => transaction.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  if (!Array.isArray(transactions)) {
    return <div>No data available</div>;
  }

  return <Bar options={options} data={data} />;
};

export default ExpenseChart;
