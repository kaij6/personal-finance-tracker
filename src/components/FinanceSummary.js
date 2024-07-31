import React from 'react';

const FinanceSummary = () => {
  const income = 1500;
  const expenses = 125;
  const balance = income - expenses;

  return (
    <div>
      <h3>Finance Summary</h3>
      <p>Total Income: ${income}</p>
      <p>Total Expenses: ${expenses}</p>
      <p>Balance: ${balance}</p>
    </div>
  );
};

export default FinanceSummary;
