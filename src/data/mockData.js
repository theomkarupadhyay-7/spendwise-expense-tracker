// Mock data for SpendWise Expense Tracker

export const metricsData = [
  {
    id: 'balance',
    title: 'Total Balance',
    value: '₹10,450.00',
    subtitle: 'Available across all your accounts',
    icon: 'account_balance',
    iconBgClass: 'bg-primary-fixed',
    iconColorClass: 'text-primary-container',
  },
  {
    id: 'spending',
    title: "This Month's Spending",
    value: '₹2,240.50',
    trend: '+8%',
    trendLabel: 'vs last month',
    icon: 'trending_up',
    iconBgClass: 'bg-error-container',
    iconColorClass: 'text-error',
  },
  {
    id: 'transactions',
    title: 'Transaction Count',
    value: '48',
    subtitle: 'Transactions logged this month',
    icon: 'receipt_long',
    iconBgClass: 'bg-tertiary-fixed',
    iconColorClass: 'text-tertiary',
  },
];

export const recentExpensesData = [
  {
    id: 1,
    title: 'Starbucks',
    category: 'Food & Drink',
    date: 'Today, 9:41 AM',
    amount: '-₹5.40',
    icon: 'coffee',
    bgTint: 'var(--color-primary-fixed)',
    iconColor: 'var(--color-primary-container)',
  },
  {
    id: 2,
    title: 'Rent',
    category: 'Housing',
    date: 'May 1, 12:00 AM',
    amount: '-₹1,450.00',
    icon: 'home',
    bgTint: 'var(--color-tertiary-fixed)',
    iconColor: 'var(--color-tertiary)',
  },
  {
    id: 3,
    title: 'Amazon',
    category: 'Shopping',
    date: 'Apr 28, 3:15 PM',
    amount: '-₹42.99',
    icon: 'shopping_cart',
    bgTint: 'var(--color-surface-container-highest)',
    iconColor: 'var(--color-on-surface-variant)',
  },
  {
    id: 4,
    title: 'Uber',
    category: 'Transport',
    date: 'Apr 27, 10:30 PM',
    amount: '-₹2400.50',
    icon: 'directions_car',
    bgTint: 'var(--color-secondary-container)',
    iconColor: 'var(--color-on-secondary-container)',
  },
  {
    id: 5,
    title: 'Electric Bill',
    category: 'Utilities',
    date: 'Apr 25, 8:00 AM',
    amount: '-₹85.00',
    icon: 'bolt',
    bgTint: 'var(--color-surface-container-highest)',
    iconColor: 'var(--color-on-surface-variant)',
  },
];

export const categoryBreakdownData = [
  { label: 'Housing', percentage: 45, value: '₹1,458.23', color: 'var(--color-primary-container)' },
  { label: 'Food', percentage: 25, value: '₹810.13', color: 'var(--color-primary-fixed-dim)' },
  { label: 'Transport', percentage: 20, value: '₹648.10', color: 'var(--color-tertiary-container)' },
  { label: 'Utilities', percentage: 10, value: '₹324.04', color: 'var(--color-surface-container-highest)' },
];

export const monthlyTrendData = [
  { month: 'Jan', heightPercent: 30, isActive: false },
  { month: 'Feb', heightPercent: 45, isActive: false },
  { month: 'Mar', heightPercent: 25, isActive: false },
  { month: 'Apr', heightPercent: 65, isActive: false },
  { month: 'May', heightPercent: 85, isActive: true },
  { month: 'Jun', heightPercent: 55, isActive: false },
  { month: 'Jul', heightPercent: 50, isActive: false },
];
