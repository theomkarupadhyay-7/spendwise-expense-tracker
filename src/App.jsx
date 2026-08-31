import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import SpendingTrend from './components/SpendingTrend';
import SpendingByCategory from './components/SpendingByCategory';
import RecentExpenses from './components/RecentExpenses';
import AddExpenseModal from './components/AddExpenseModal';
import ExpensesPage from './components/ExpensesPage';
import SettingsPage from './components/SettingsPage';
import InvestmentPage from './components/InvestmentPage';
import { metricsData } from './data/mockData';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('spendwise-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [expenses, setExpenses] = useState(() => {
  const savedExpenses = localStorage.getItem('spendwise-expenses');

  return savedExpenses ? JSON.parse(savedExpenses) : [];
});

useEffect(() => {
  localStorage.setItem(
    'spendwise-expenses',
    JSON.stringify(expenses)
  );
}, [expenses]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('spendwise-theme', theme);
  }, [theme]);

  const handleAddExpense = (newExpense) => {
    setExpenses((previousExpenses) => [
      ...previousExpenses,
      {
        ...newExpense,
        id: Date.now(),
      },
    ]);

    setIsAddModalOpen(false);
  };
  const totalSpent = expenses.reduce(
    (total, expense) => total + Number(expense.amount || 0),
    3240.50
  );

  const transactionCount = expenses.length;

  const dynamicMetrics = metricsData.map((metric) => {
    if (metric.id === 'spending') {
      return { ...metric, value: `₹${totalSpent.toFixed(2)}` };
    }
    if (metric.id === 'transactions') {
      return { ...metric, value: String(transactionCount) };
    }
    if (metric.id === 'balance') {
      const newBalance = 12450.00 - (totalSpent - 3240.50);
      return { ...metric, value: `₹${newBalance.toFixed(2)}` };
    }

    return metric;
  });

  console.log('Current expenses:', expenses);

  return (
    <div className="app-layout">
      {/* Navigation Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpenMobile={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Main Workspace Wrapper */}
      <div className="main-wrapper">
        {/* Top Navigation Bar */}
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          theme={theme}
          onToggleTheme={() => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')}
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(true)}
        />

        {/* Dashboard Main Canvas */}
        {activeTab === 'expenses' ? <ExpensesPage expenses={expenses} onOpenAddModal={() => setIsAddModalOpen(true)} /> : activeTab === 'investments' ? (
          <InvestmentPage
            balance={12450 - (totalSpent - 3240.5)}
            spending={totalSpent}
          />
        ) : activeTab === 'settings' ? (
          <SettingsPage
            theme={theme}
            onToggleTheme={() => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')}
          />
        ) : <main className="dashboard-canvas">
          {/* Header Greeting */}
          <div className="page-header">
            <div>
              <h1 className="page-title">Overview</h1>
              <p className="page-subtitle">Here's your financial summary for this month.</p>
            </div>
            <button className="btn-add-expense page-add-expense" onClick={() => setIsAddModalOpen(true)}>
              <span className="material-symbols-outlined">add</span>
              <span>Add Expense</span>
            </button>
          </div>

          {/* Top 3 KPI Metric Cards */}
          <div className="kpi-grid">
            {dynamicMetrics.map((metric) =>
              <MetricCard
                key={metric.id}
                title={metric.title}
                value={metric.value}
                subtitle={metric.subtitle}
                trend={metric.trend}
                trendLabel={metric.trendLabel}
                icon={metric.icon}
                iconBgClass={metric.iconBgClass}
                iconColorClass={metric.iconColorClass}
              />
            )}
          </div>

          {/* Analytics & Activity Split Content */}
          <div className="content-grid">
            {/* Left Column: Visual Charts */}
            <div className="charts-column">
              <SpendingTrend expenses={expenses} />
              <SpendingByCategory />
            </div>

            {/* Right Column: Transaction Feed */}
            <RecentExpenses searchTerm={searchTerm} expenses={expenses} />
          </div>
        </main>}
      </div>

      {/* Add Expense Dialog Modal */}
      <AddExpenseModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSaveExpense={handleAddExpense}
      />
    </div>
  );
}

export default App;
