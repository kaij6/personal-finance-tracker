import React, { useState } from 'react';

const AddTransaction = ({ onAddTransaction }) => {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !type || !category || !amount) {
      alert('Please fill in all fields');
      return;
    }
    const newTransaction = {
      date,
      type,
      category,
      amount: parseFloat(amount),
    };
    onAddTransaction(newTransaction);
    setDate('');
    setType('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select Type</option>
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
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
