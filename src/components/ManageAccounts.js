// src/components/ManageAccounts.js
import React, { useState } from 'react';

function ManageAccounts() {
  const [accounts, setAccounts] = useState([]);
  const [accountName, setAccountName] = useState('');
  const [balance, setBalance] = useState('');

  const addAccount = () => {
    setAccounts([...accounts, { name: accountName, balance: parseFloat(balance) }]);
    setAccountName('');
    setBalance('');
  };

  const deleteAccount = (index) => {
    setAccounts(accounts.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Manage Accounts</h2>
      <div>
        <h3>Add New Account</h3>
        <input 
          type="text" 
          placeholder="Account Name" 
          value={accountName} 
          onChange={(e) => setAccountName(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Balance" 
          value={balance} 
          onChange={(e) => setBalance(e.target.value)} 
        />
        <button onClick={addAccount}>Add Account</button>
      </div>
      <div>
        <h3>Accounts</h3>
        <ul>
          {accounts.map((account, index) => (
            <li key={index}>
              {account.name}: ${account.balance}
              <button onClick={() => deleteAccount(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ManageAccounts;
