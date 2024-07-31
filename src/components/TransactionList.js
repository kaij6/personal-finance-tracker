import React from 'react';

const TransactionList = () => {
  const transactions = [
    { id: 1, description: 'Groceries', amount: -50, date: '2024-07-30' },
    { id: 2, description: 'Salary', amount: 1500, date: '2024-07-25' },
    { id: 3, description: 'Electricity Bill', amount: -75, date: '2024-07-20' },
  ];

  return (
    <ul>
      {transactions.map(transaction => (
        <li key={transaction.id}>
          {transaction.date} - {transaction.description}: ${transaction.amount}
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
