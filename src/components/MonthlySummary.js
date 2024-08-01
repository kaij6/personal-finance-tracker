import React from 'react';

const MonthlySummary = ({ transactions }) => {
  console.log("Monthly Transactions: ", transactions); // Debugging line

  const totalIncome = transactions.filter(t => t.type === 'Income').reduce((acc, t) => acc + t.amount, 0);
  const totalExpenses = transactions.filter(t => t.type === 'Expense').reduce((acc, t) => acc + t.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div>
      <h2>Monthly Summary</h2>
      <p>Total Income: ${totalIncome.toFixed(2)}</p>
      <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
      <p>Balance: ${balance.toFixed(2)}</p>
    </div>
  );
};

export default MonthlySummary;