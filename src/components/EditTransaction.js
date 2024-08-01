// src/components/EditTransaction.js
import React, { useState, useEffect } from 'react';

const EditTransaction = ({ transaction, onUpdateTransaction }) => {
  const [date, setDate] = useState(transaction.date);
  const [type, setType] = useState(transaction.type);
  const [category, setCategory] = useState(transaction.category);
  const [amount, setAmount] = useState(transaction.amount);

  useEffect(() => {
    setDate(transaction.date);
    setType(transaction.type);
    setCategory(transaction.category);
    setAmount(transaction.amount);
  }, [transaction]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateTransaction({
      ...transaction,
      date,
      type,
      category,
      amount: parseFloat(amount),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Update Transaction</button>
    </form>
  );
};

export default EditTransaction;
