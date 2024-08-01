import React, { useState } from 'react';

const BudgetLimits = ({ onAddBudget }) => {
  const [category, setCategory] = useState('');
  const [limit, setLimit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBudget(category, limit);
    setCategory('');
    setLimit('');
  };

  return (
    <div>
      <h2>Set Budget Limits</h2>
      <form className="budget-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Budget Limit" 
          value={limit} 
          onChange={(e) => setLimit(e.target.value)} 
        />
        <button type="submit">Add Budget</button>
      </form>
    </div>
  );
};

export default BudgetLimits;
