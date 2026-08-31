import React from 'react';
import { monthlyTrendData } from '../data/mockData';

function SpendingTrend({ expenses = [] }) {
  const augustSpending = expenses.reduce((total, expense) => {
    const expenseDate = new Date(`${expense.date}T00:00:00`);
    const isAugust = expenseDate.getMonth() === 7;

    return isAugust ? total + Number(expense.amount || 0) : total;
  }, 0);
  const augustHeight = augustSpending > 0
    ? Math.min((augustSpending / 3240.5) * 85, 100)
    : 0;
  const chartData = [
    ...monthlyTrendData,
    { month: 'Aug', heightPercent: augustHeight, isActive: augustSpending > 0 },
  ];

  return (
    <div className="chart-card">
      <div className="card-header">
        <h3 className="card-title">Monthly Spending Trend</h3>
        <button className="icon-btn-sm" aria-label="More options">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>

      <div className="chart-content">
        <div className="bar-chart-container">
          {chartData.map((item, index) => (
            <div key={index} className="bar-column">
              <div className="bar-wrapper">
                <div
                  className={`bar-fill ${item.isActive ? 'bar-active' : ''}`}
                  style={{ height: `${item.heightPercent}%` }}
                >
                  {item.isActive && (
                    <div className="bar-tooltip">
                      {item.month} · ₹{item.month === 'Aug' ? augustSpending.toFixed(2) : '3,240.50'}
                    </div>
                  )}
                </div>
              </div>
              <span className="bar-label">{item.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpendingTrend;
