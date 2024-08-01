import React from 'react';
import { Pie } from 'react-chartjs-2';

const ExpenseCategoriesChart = ({ transactions }) => {
  const expenseTransactions = transactions.filter(transaction => transaction.type === 'Expense');
  
  const categories = [...new Set(expenseTransactions.map(transaction => transaction.category))];
  
  const data = {
    labels: categories,
    datasets: [{
      data: categories.map(category => {
        return expenseTransactions
          .filter(transaction => transaction.category === category)
          .reduce((sum, transaction) => sum + transaction.amount, 0);
      }),
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FF9F40',
        '#FFCD56',
        '#4BC0C0',
        '#9966FF',
        '#FF6384',
        '#36A2EB'
      ]
    }]
  };

  return (
    <div>
      <h2>Expense Categories Breakdown</h2>
      <Pie data={data} />
    </div>
  );
};

export default ExpenseCategoriesChart;
