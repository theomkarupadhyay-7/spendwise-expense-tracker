import React from 'react';
import { categoryBreakdownData } from '../data/mockData';

function SpendingByCategory() {
  return (
    <div className="chart-card">
      <div className="card-header">
        <h3 className="card-title">Spending by Category</h3>
      </div>

      <div className="donut-content">
        {/* Donut Chart Visual */}
        <div className="donut-chart-wrapper">
          <div className="donut-ring"></div>
          <div className="donut-center">
            <span className="donut-center-label">Total</span>
            <span className="donut-center-value">₹3,240</span>
          </div>
        </div>

        {/* Category Legend */}
        <div className="category-legend">
          {categoryBreakdownData.map((cat, idx) => (
            <div key={idx} className="legend-item">
              <div className="legend-info">
                <span className="legend-dot" style={{ backgroundColor: cat.color }}></span>
                <span className="legend-name">{cat.label}</span>
              </div>
              <span className="legend-percentage">{cat.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpendingByCategory;
