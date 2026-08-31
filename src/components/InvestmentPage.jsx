import React, { useState } from 'react';

const investmentOptions = [
  { name: 'Mutual Funds', icon: 'pie_chart', description: 'Diversified funds managed by experts' },
  { name: 'ETF Stocks', icon: 'candlestick_chart', description: 'Trade baskets of listed securities' },
  { name: 'Gold', icon: 'diamond', description: 'Build a hedge with digital gold' },
  { name: 'Real Estate', icon: 'domain', description: 'Explore property-backed opportunities' },
];

const companies = [
  { name: 'Groww',logo: '/logos/groww.jpg', type: 'Investment platform', change: '+2.48%', status: 'Popular' },
  { name: 'Aditya Birla Capital', type: 'Mutual funds & wealth', change: '+1.82%', status: 'Featured' },
  { name: 'Tata Investment Corporation', type: 'Investment company', change: '+1.24%', status: 'Steady' },
  { name: 'HDFC Asset Management', type: 'Mutual funds', change: '+0.96%', status: 'Featured' },
  { name: 'Zerodha', type: 'Stocks & ETFs', change: '+0.74%', status: 'Popular' },
];

function formatAmount(amount) {
  return `₹${Number(amount).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function InvestmentPage({ balance, spending }) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <main className="dashboard-canvas investment-page">
      <div className="page-header investment-page-header">
        <div>
          <p className="investment-eyebrow">SpendWise investing</p>
          <h1 className="investment-title"> <span>InvestWise</span></h1>
          <p className="page-subtitle">Grow your money with simple, informed choices.</p>
        </div>
      </div>

      <div className="investment-summary-grid">
        <div className="investment-summary-card balance-summary">
          <div className="investment-summary-icon"><span className="material-symbols-outlined">account_balance_wallet</span></div>
          <div>
            <span className="investment-summary-label">Total balance</span>
            <strong>{formatAmount(balance)}</strong>
            <span className="investment-summary-note">Available to plan your next move</span>
          </div>
        </div>
        <div className="investment-summary-card spending-summary">
          <div className="investment-summary-icon"><span className="material-symbols-outlined">trending_up</span></div>
          <div>
            <span className="investment-summary-label">Monthly spending</span>
            <strong>{formatAmount(spending)}</strong>
            <span className="investment-summary-note">Keep your goals in sight</span>
          </div>
        </div>
      </div>

      <section className="investment-section">
        <div className="investment-section-heading">
          <div>
            <h2>Investment options</h2>
            <p>Choose a path that matches your goals.</p>
          </div>
          <span className="material-symbols-outlined section-heading-mark">auto_awesome</span>
        </div>
        <div className="investment-options-grid">
          {investmentOptions.map((option) => (
            <div className={`investment-option ${selectedOption === option.name ? 'selected' : ''}`} key={option.name}>
              <div className="investment-option-icon">
                <span className="material-symbols-outlined">{option.icon}</span>
              </div>
              <div className="investment-option-copy">
                <h3>{option.name}</h3>
                <p>{option.description}</p>
              </div>
              <button
                className="invest-button"
                type="button"
                onClick={() => setSelectedOption(option.name)}
              >
                {selectedOption === option.name ? 'Selected' : 'Invest'}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="investment-section company-section">
        <div className="investment-section-heading">
          <div>
            <h2>Explore companies</h2>
            <p>Discover popular Indian investment platforms and companies.</p>
          </div>
          <span className="company-market-status"><span /> Market watch</span>
        </div>
        <div className="company-table-wrap">
          <div className="company-table company-table-head">
            <span>Company</span>
            <span>Type</span>
            <span>Today</span>
            <span>Action</span>
          </div>
          {companies.map((company) => (
            <button className="company-table company-table-row" type="button" key={company.name}>
              <span className="company-name-cell">
                {company.logo ? (
  <img
    className="company-logo"
    src={company.logo}
    alt={`${company.name} logo`}
  />
) : (
  <span className="company-avatar">{company.name.charAt(0)}</span>
)}
                <span><strong>{company.name}</strong><small>{company.status}</small></span>
              </span>
              <span className="company-type">{company.type}</span>
              <span className="company-change">{company.change}</span>
              <span className="company-action">View <span className="material-symbols-outlined">arrow_forward</span></span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default InvestmentPage;
