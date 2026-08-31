import React from 'react';

function Sidebar({ activeTab, setActiveTab, isOpenMobile, onCloseMobile }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'expenses', label: 'Expenses', icon: 'payments' },
    { id: 'investments', label: 'Investments', icon: 'show_chart' },
    { id: 'analytics', label: 'Analytics', icon: 'insights' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  return (
    <>
      {/* Mobile backdrop overlay */}
      {isOpenMobile && (
        <div
          className="mobile-backdrop"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      <aside className={`sidebar ${isOpenMobile ? 'mobile-open' : ''}`}>
        {/* Brand Header */}
        <div className="sidebar-brand">
          <span className="material-symbols-outlined icon-fill brand-icon">
            account_balance_wallet
          </span>
          <span className="brand-title">SpendWise</span>
          {/* Mobile close button */}
          <button className="mobile-close-btn" onClick={onCloseMobile} aria-label="Close sidebar">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                className={`nav-link ${isActive ? 'active' : ''} ${item.disabled ? 'disabled' : ''}`}
                onClick={() => {
                  if (!item.disabled) {
                    setActiveTab(item.id);
                    onCloseMobile();
                  }
                }}
                aria-disabled={item.disabled}
              >
                <span className={`material-symbols-outlined ${isActive ? 'icon-fill' : ''}`}>
                  {item.icon}
                </span>
                <span className="nav-text">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer Section: Add Expense Button & Profile */}
        <div className="sidebar-footer">
          <div className="premium-card">
            <div className="premium-card-icon">
              <span className="material-symbols-outlined icon-fill">workspace_premium</span>
            </div>
            <div className="premium-card-copy">
              <strong>Get Premium Pro</strong>
              <span>Try it free for 1 month</span>
            </div>
            <button className="premium-cta" type="button">Try Pro</button>
          </div>

          <div className="user-profile">
            <img
              src="https://www.flaticon.com/free-icon/user_219988"
              alt="You"
              className="user-avatar"
            />
            <div className="user-info">
              <span className="user-name">You</span>
              <span className="user-plan">Premium User</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
