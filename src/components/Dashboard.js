import React, { useState } from 'react';
import ExpenseChart from './ExpenseChart';
import TransactionList from './TransactionList';
import FinanceSummary from './FinanceSummary';
import AddTransaction from './AddTransaction';

const Dashboard = ({ transactions, addTransaction }) => {
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  const handleAddTransactionClick = () => {
    setShowAddTransaction(!showAddTransaction);
  };

  const handleViewReportsClick = () => {
    alert('View Reports functionality is not yet implemented.');
  };

  const handleManageAccountsClick = () => {
    alert('Manage Accounts functionality is not yet implemented.');
  };

  return (
    <div className="container">
      <header>
        <h2>Dashboard</h2>
      </header>
      <div>
        <p>Welcome back, [User's Name]!</p>
      </div>
      <div>
        <FinanceSummary transactions={transactions} />
      </div>
      <div className="quick-actions">
        <button onClick={handleAddTransactionClick}>Add Transaction</button>
        <button onClick={handleViewReportsClick}>View Reports</button>
        <button onClick={handleManageAccountsClick}>Manage Accounts</button>
      </div>
      {showAddTransaction && <AddTransaction addTransaction={addTransaction} />}
      <div>
        <h3>Recent Transactions</h3>
        <TransactionList transactions={transactions} />
      </div>
      <div className="chart-container">
        <h3>Expense Overview</h3>
        <ExpenseChart transactions={transactions} />
      </div>
      <footer>© 2024 Personal Finance Tracker</footer>
    </div>
  );
};

export default Dashboard;
