import React from 'react';

const monthOptions = [
  { key: '2026-08', label: 'August 2026' },
  { key: '2026-07', label: 'July 2026' },
];

const categoryColors = [
  'var(--color-primary-container)',
  'var(--color-primary-fixed-dim)',
  'var(--color-tertiary-container)',
  'var(--color-error)',
  'var(--color-secondary)',
];

const getMonthKey = (date) => date.slice(0, 7);

const formatAmount = (amount) => `₹${amount.toLocaleString('en-IN', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})}`;

function ExpensesPage({ expenses = [], onOpenAddModal }) {
  const getMonthExpenses = (monthKey) => expenses.filter((expense) => (
    getMonthKey(expense.date || '') === monthKey
  ));

  const augustExpenses = getMonthExpenses('2026-08');
  const augustTotal = augustExpenses.reduce(
    (total, expense) => total + Number(expense.amount || 0),
    0,
  );

  const categoryTotals = augustExpenses.reduce((totals, expense) => {
    const category = expense.category || 'other';
    totals[category] = (totals[category] || 0) + Number(expense.amount || 0);
    return totals;
  }, {});

  const categories = Object.entries(categoryTotals)
    .sort(([, firstTotal], [, secondTotal]) => secondTotal - firstTotal)
    .map(([category, amount], index) => ({
      label: category.replace(/(^|_)([a-z])/g, (_, prefix, letter) => `${prefix ? ' ' : ''}${letter.toUpperCase()}`),
      amount,
      percentage: augustTotal ? Math.round((amount / augustTotal) * 100) : 0,
      color: categoryColors[index % categoryColors.length],
    }));

  let currentOffset = 0;
  const donutSegments = categories.map((category) => {
    const start = currentOffset;
    currentOffset += category.percentage;
    return `${category.color} ${start}% ${currentOffset}%`;
  });

  return (
    <main className="dashboard-canvas expenses-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Your Expenses</h1>
          <p className="page-subtitle">Review your spending month by month.</p>
        </div>
        <button className="btn-add-expense page-add-expense" onClick={onOpenAddModal}>
          <span className="material-symbols-outlined">add</span>
          <span>Add Expense</span>
        </button>
      </div>

      <section className="expense-month-section expense-month-current">
        <div className="month-heading">
          <div>
            <span className="month-kicker">Current month</span>
            <h2 className="month-title">August 2026</h2>
          </div>
          <span className="month-count">{augustExpenses.length} transactions</span>
        </div>

        <div className="expense-summary-grid">
          <div className="expense-summary-card">
            <span className="summary-label">Total spending</span>
            <strong>{formatAmount(augustTotal)}</strong>
            <span className="summary-note">August total</span>
          </div>
          <div className="expense-summary-card">
            <span className="summary-label">Total transactions</span>
            <strong>{augustExpenses.length}</strong>
            <span className="summary-note">Recorded this month</span>
          </div>
        </div>

        <div className="month-expenses-layout">
          <div className="month-expense-list">
            {augustExpenses.length > 0 ? augustExpenses.map((expense) => (
              <div className="expense-item" key={expense.id}>
                <div className="expense-icon-badge expense-icon-primary">
                  <span className="material-symbols-outlined">receipt_long</span>
                </div>
                <div className="expense-details">
                  <div className="expense-name">{expense.description || 'Expense'}</div>
                  <div className="expense-meta">
                    {expense.category || 'Other'} · {expense.date}
                  </div>
                </div>
                <div className="expense-amount">-{formatAmount(Number(expense.amount || 0))}</div>
              </div>
            )) : (
              <div className="month-empty-state">
                <span className="material-symbols-outlined">receipt_long</span>
                <strong>No August expenses yet</strong>
                <span>Add an expense dated in August to see it here.</span>
              </div>
            )}
          </div>

          <div className="expense-category-card">
            <div className="card-header">
              <h3 className="card-title">August by category</h3>
            </div>
            {categories.length > 0 ? (
              <div className="donut-content">
                <div
                  className="donut-ring expense-donut-ring"
                  style={{ background: `conic-gradient(${donutSegments.join(', ')})` }}
                />
                <div className="donut-center">
                  <span className="donut-center-label">Total</span>
                  <span className="donut-center-value">{formatAmount(augustTotal)}</span>
                </div>
                <div className="category-legend">
                  {categories.map((category) => (
                    <div className="legend-item" key={category.label}>
                      <div className="legend-info">
                        <span className="legend-dot" style={{ backgroundColor: category.color }} />
                        <span className="legend-name">{category.label}</span>
                      </div>
                      <span className="legend-percentage">{category.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="category-empty-state">Category data will appear after your first August expense.</div>
            )}
          </div>
        </div>
      </section>

      <section className="expense-month-section expense-month-empty">
        <div className="month-heading">
          <div>
            <span className="month-kicker">Previous month</span>
            <h2 className="month-title">July 2026</h2>
          </div>
          <span className="month-count">0 transactions</span>
        </div>
        <div className="month-empty-state month-empty-wide">
          <span className="material-symbols-outlined">calendar_month</span>
          <strong>No July data</strong>
          <span>No expenses were recorded for this month.</span>
        </div>
      </section>
    </main>
  );
}

export default ExpensesPage;
