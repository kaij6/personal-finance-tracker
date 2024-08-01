import React from 'react';

const CategorySummary = ({ categorySummary }) => {
  return (
    <div>
      <h2>Summary by Category</h2>
      <ul>
        {Object.keys(categorySummary).map(category => (
          <li key={category}>
            {category} - Income: ${categorySummary[category].income.toFixed(2)}, Expense: ${categorySummary[category].expense.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySummary;
