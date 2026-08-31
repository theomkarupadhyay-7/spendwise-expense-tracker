import React from 'react';
import { recentExpensesData } from '../data/mockData';

function RecentExpenses({ searchTerm = '', expenses = [] }) {
  // Format newly added expenses to match the display structure
  const formattedNewExpenses = expenses.map((item) => ({
    id: item.id,
    title: item.description || 'Expense',
    category: item.category || 'General',
    date: item.date || 'Today',
    amount: `-₹${Number(item.amount || 0).toFixed(2)}`,
    icon: 'receipt_long',
    bgTint: 'var(--color-primary-fixed)',
    iconColor: 'var(--color-primary-container)',
  }));

  // Combine new user expenses with initial sample expenses (new items first)
  const combinedExpenses = [...formattedNewExpenses, ...recentExpensesData];

  // Filter expenses based on search term typed in header search input
  const filteredExpenses = combinedExpenses.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="recent-expenses-card">
      <div className="card-header flex-between">
        <h3 className="card-title">Recent Expenses</h3>
        <button className="link-btn">View All</button>
      </div>

      <div className="expenses-list">
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map((expense) => (
            <div key={expense.id} className="expense-item">
              <div
                className="expense-icon-badge"
                style={{ backgroundColor: expense.bgTint, color: expense.iconColor }}
              >
                <span className="material-symbols-outlined">{expense.icon}</span>
              </div>

              <div className="expense-details">
                <div className="expense-name">{expense.title}</div>
                <div className="expense-meta">
                  {expense.category} • {expense.date}
                </div>
              </div>

              <div className="expense-amount">{expense.amount}</div>
            </div>
          ))
        ) : (
          <div className="no-expenses">No transactions found</div>
        )}
      </div>

      <div className="card-footer">
        <button className="btn-export-csv">
          <span className="material-symbols-outlined text-sm">download</span>
          <span>Export CSV</span>
        </button>
      </div>
    </div>
  );
}

export default RecentExpenses;
