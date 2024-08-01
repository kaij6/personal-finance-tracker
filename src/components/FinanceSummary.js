import React from 'react';

const FinanceSummary = ({ totalIncome, totalExpenses }) => {
  const balance = (parseFloat(totalIncome || 0) - totalExpenses).toFixed(2);
  return (
    <div>
      <h2>Finance Summary</h2>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
      <p>Balance: ${balance}</p>
    </div>
  );
};

export default FinanceSummary;
