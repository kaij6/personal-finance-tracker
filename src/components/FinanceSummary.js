import React from 'react';

const FinanceSummary = ({ transactions, totalIncome }) => {
  const totalExpenses = transactions.reduce((acc, transaction) => {
    return transaction.type === 'Expense' ? acc + Math.abs(transaction.amount) : acc;
  }, 0);

  const balance = totalIncome ? totalIncome - totalExpenses : 0;

  return (
    <div>
      <h2>Finance Summary</h2>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Balance: ${balance}</p>
    </div>
  );
};

export default FinanceSummary;
