import React from 'react';
import { Link } from 'react-router-dom';
import TransactionList from './TransactionList';
import FinanceSummary from './FinanceSummary';
import ExpenseChart from './ExpenseChart';

const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    values: [65, 59, 80, 81, 56, 55, 40],
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome back, [User's Name]!</p>
      
      <FinanceSummary />
      
      <div className="quick-actions">
        <Link to="/add-transaction" className="btn">Add Transaction</Link>
        <Link to="/reports" className="btn">View Reports</Link>
        <Link to="/manage-accounts" className="btn">Manage Accounts</Link>
      </div>

      <h3>Recent Transactions</h3>
      <TransactionList />

      <h3>Expense Overview</h3>
      <ExpenseChart data={data} />

      <style jsx>{`
        .quick-actions {
          margin: 20px 0;
        }
        .btn {
          margin-right: 10px;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 5px;
        }
        .btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
