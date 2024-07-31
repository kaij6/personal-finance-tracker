import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          {transaction.date} - {transaction.description}: ${transaction.amount}
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
