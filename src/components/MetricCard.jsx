import React from 'react';

function MetricCard({ title, value, subtitle, trend, trendLabel, icon, iconBgClass, iconColorClass }) {
  return (
    <div className="metric-card">
      <div className="metric-header">
        <h3 className="metric-title">{title}</h3>
        <div className={`metric-icon-badge ${iconBgClass} ${iconColorClass}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>

      <div className="metric-value">{value}</div>

      <div className="metric-footer">
        {trend ? (
          <div className="trend-badge-group">
            <span className="trend-badge">
              <span className="material-symbols-outlined trend-icon">arrow_upward</span>
              {trend}
            </span>
            {trendLabel && <span className="trend-label">{trendLabel}</span>}
          </div>
        ) : (
          <span className="metric-subtitle">{subtitle}</span>
        )}
      </div>
    </div>
  );
}

export default MetricCard;
