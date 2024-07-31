import React, { useState, useEffect } from 'react';
import './App.scss';
import AddTransaction from './components/AddTransaction';
import FinanceSummary from './components/FinanceSummary';
import TransactionList from './components/TransactionList';
import ExpenseChart from './components/ExpenseChart';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const transactions = data.slice(0, 5).map(post => ({
          id: post.id,
          date: '2024-07-25',
          type: 'Income',
          category: 'Salary',
          amount: Math.floor(Math.random() * 1000) + 1
        }));
        setTransactions(transactions);
      })
      .catch(error => console.error('There was a problem with the fetch operation:', error));
  }, []);

  const addTransaction = (transaction) => {
    transaction.id = transactions.length + 1;
    setTransactions([...transactions, transaction]);
  };

  const handleTotalIncomeChange = (e) => {
    setTotalIncome(parseFloat(e.target.value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Finance Tracker</h1>
      </header>
      <div className="container">
        <FinanceSummary totalIncome={totalIncome} transactions={transactions} />
        <div className="input-container">
          <label>Total Income: $</label>
          <input
            type="number"
            value={totalIncome}
            onChange={handleTotalIncomeChange}
          />
        </div>
        <AddTransaction onAddTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
        <ExpenseChart transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
