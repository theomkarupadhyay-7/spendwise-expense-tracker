import React, { useState } from 'react';

function SettingsPage({ theme, onToggleTheme }) {
  const [currency, setCurrency] = useState('INR');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <main className="dashboard-canvas settings-page">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Modify your settings here.</p>
      </div>

      <div className="settings-layout">
        <section className="settings-section">
          <div className="settings-section-header">
            <div className="settings-heading-group">
              <span className="material-symbols-outlined settings-heading-icon">tune</span>
              <div>
                <h2 className="settings-section-title">Basic settings</h2>
                <p className="settings-section-subtitle">Personalize how SpendWise works for you.</p>
              </div>
            </div>
          </div>

          <div className="settings-list">
            <div className="setting-row">
              <div className="setting-copy">
                <strong>Appearance</strong>
                <span>Choose between light and dark mode.</span>
              </div>
              <button
                className="setting-control theme-setting-control"
                type="button"
                onClick={onToggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <span className="material-symbols-outlined">{theme === 'light' ? 'light_mode' : 'dark_mode'}</span>
                <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
              </button>
            </div>

            <div className="setting-row">
              <div className="setting-copy">
                <strong>Currency</strong>
                <span>Used when displaying expense amounts.</span>
              </div>
              <select
                className="setting-select"
                value={currency}
                onChange={(event) => setCurrency(event.target.value)}
                aria-label="Currency"
              >
                <option value="INR">INR (₹)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
              </select>
            </div>

            <div className="setting-row">
              <div className="setting-copy">
                <strong>Notifications</strong>
                <span>Receive reminders about your spending.</span>
              </div>
              <button
                className={`setting-toggle ${notificationsEnabled ? 'enabled' : ''}`}
                type="button"
                onClick={() => setNotificationsEnabled((enabled) => !enabled)}
                aria-pressed={notificationsEnabled}
                aria-label={`${notificationsEnabled ? 'Disable' : 'Enable'} notifications`}
              >
                <span className="toggle-thumb" />
              </button>
            </div>
          </div>
        </section>

        <section className="settings-section settings-links-section">
          <div className="settings-section-header">
            <div className="settings-heading-group">
              <span className="material-symbols-outlined settings-heading-icon">support</span>
              <div>
                <h2 className="settings-section-title">Help & support</h2>
                <p className="settings-section-subtitle">Find answers or get in touch.</p>
              </div>
            </div>
          </div>

          <div className="settings-link-list">
            <button className="settings-link" type="button">
              <span className="material-symbols-outlined">help_center</span>
              <span className="setting-copy">
                <strong>Help Centre</strong>
                <span>Browse answers to common questions.</span>
              </span>
              <span className="material-symbols-outlined settings-link-arrow">chevron_right</span>
            </button>
            <a className="settings-link" href="mailto:support@spendwise.app">
              <span className="material-symbols-outlined">mail</span>
              <span className="setting-copy">
                <strong>Contact Us</strong>
                <span>Send a message to the SpendWise team.</span>
              </span>
              <span className="material-symbols-outlined settings-link-arrow">chevron_right</span>
            </a>
            <div className="settings-link settings-about-row">
              <span className="material-symbols-outlined">info</span>
              <span className="setting-copy">
                <strong>About SpendWise</strong>
                <span>Expense tracking made simple. Version 1.0.0</span>
              </span>
            </div>
          </div>
        </section>
      </div>

      <footer className="settings-footer">
        &copy; SpendWise 2026. All rights reserved. Pune, India.
      </footer>
    </main>
  );
}

export default SettingsPage;
