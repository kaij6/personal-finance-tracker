// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.scss';
import AddTransaction from './components/AddTransaction';
import FinanceSummary from './components/FinanceSummary';
import TransactionList from './components/TransactionList';
import ExpenseChart from './components/ExpenseChart';
import ViewReports from './components/ViewReports';
import ManageAccounts from './components/ManageAccounts';
import EditTransaction from './components/EditTransaction';
import ExpenseCategoriesChart from './components/ExpenseCategoriesChart';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    const savedTransactions = localStorage.getItem('transactions');
    const savedTotalIncome = localStorage.getItem('totalIncome');
    const savedTotalExpenses = localStorage.getItem('totalExpenses');
    const savedBudget = localStorage.getItem('budget');
    if (savedTransactions) setTransactions(JSON.parse(savedTransactions));
    if (savedTotalIncome) setTotalIncome(parseFloat(savedTotalIncome));
    if (savedTotalExpenses) setTotalExpenses(parseFloat(savedTotalExpenses));
    if (savedBudget) setBudget(parseFloat(savedBudget));
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('totalIncome', totalIncome.toString());
    localStorage.setItem('totalExpenses', totalExpenses.toString());
    localStorage.setItem('budget', budget.toString());
  }, [transactions, totalIncome, totalExpenses, budget]);

  const addTransaction = (transaction) => {
    if (transaction.type === 'Expense' && totalExpenses + transaction.amount > budget) {
      alert('This transaction exceeds your budget limit.');
      return;
    }
    transaction.id = transactions.length + 1;
    setTransactions([...transactions, transaction]);
    if (transaction.type === 'Income') {
      setTotalIncome(totalIncome + transaction.amount);
    } else {
      setTotalExpenses(totalExpenses + transaction.amount);
    }
  };

  const deleteTransaction = (id) => {
    const transactionToDelete = transactions.find(transaction => transaction.id === id);
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    if (transactionToDelete.type === 'Income') {
      setTotalIncome(totalIncome - transactionToDelete.amount);
    } else {
      setTotalExpenses(totalExpenses - transactionToDelete.amount);
    }
  };

  const editTransaction = (id) => {
    const transaction = transactions.find(t => t.id === id);
    setEditingTransaction(transaction);
  };

  const updateTransaction = (updatedTransaction) => {
    const oldTransaction = transactions.find(t => t.id === updatedTransaction.id);
    const updatedTransactions = transactions.map(t => (t.id === updatedTransaction.id ? updatedTransaction : t));
    setTransactions(updatedTransactions);

    if (oldTransaction.type === 'Income') {
      setTotalIncome(totalIncome - oldTransaction.amount);
    } else {
      setTotalExpenses(totalExpenses - oldTransaction.amount);
    }

    if (updatedTransaction.type === 'Income') {
      setTotalIncome(totalIncome + updatedTransaction.amount);
    } else {
      setTotalExpenses(totalExpenses + updatedTransaction.amount);
    }

    setEditingTransaction(null);
  };

  const handleBudgetChange = (e) => {
    const budget = parseFloat(e.target.value) || 0;
    setBudget(budget);
  };

  const handleAddBudget = () => {
    alert(`Budget of $${budget} set!`);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Kai's Finance Tracker💰</h1>
        </header>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/view-reports">View Reports</Link></li>
            <li><Link to="/manage-accounts">Manage Accounts</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="main">
                <div className="finance-summary">
                  <FinanceSummary totalIncome={totalIncome} totalExpenses={totalExpenses} />
                </div>
                <div className="form-container">
                  {editingTransaction ? (
                    <EditTransaction 
                      transaction={editingTransaction} 
                      onUpdateTransaction={updateTransaction} 
                    />
                  ) : (
                    <AddTransaction onAddTransaction={addTransaction} />
                  )}
                </div>
                <TransactionList 
                  transactions={transactions} 
                  onDeleteTransaction={deleteTransaction} 
                  onEditTransaction={editTransaction} 
                />
                <ExpenseChart transactions={transactions} />
                {/* Expense Categories Breakdown Section */}
                <ExpenseCategoriesChart transactions={transactions} />
                {/* Set Budget Limits Section */}
                <div className="set-budget-limits">
                  <h2>Set Budget Limits</h2>
                  <form className="budget-form">
                    <input 
                      type="number" 
                      placeholder="Budget Limit" 
                      value={budget === 0 ? '' : budget} 
                      onChange={handleBudgetChange} 
                    />
                    <button type="button" onClick={handleAddBudget}>Add Budget</button>
                  </form>
                </div>
              </div>
            } 
          />
          <Route path="/view-reports" element={<ViewReports transactions={transactions} />} />
          <Route path="/manage-accounts" element={<ManageAccounts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
