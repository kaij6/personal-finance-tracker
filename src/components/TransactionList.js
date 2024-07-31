import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h3>Recent Transactions</h3>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.date} - {transaction.category}: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
