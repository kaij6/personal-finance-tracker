// src/components/TransactionList.js
import React from 'react';
import './TransactionList.scss';

const TransactionList = ({ transactions, onDeleteTransaction, onEditTransaction }) => {
  return (
    <div>
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.date} - {transaction.category}: ${transaction.amount}
            <div className="button-container">
              <button className="edit-button" onClick={() => onEditTransaction(transaction.id)}>
                ✏️ Edit
              </button>
              <button className="delete-button" onClick={() => onDeleteTransaction(transaction.id)}>
                🗑️ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
