import React, { useState } from 'react';

function AddExpenseModal({ isOpen, onClose, onSaveExpense }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [paymentMethod, setPaymentMethod] = useState('credit_card');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      amount: Number(amount),
      description,
      category,
      date,
      paymentMethod,
    };

    onSaveExpense(newExpense);

    setAmount('');
    setDescription('');
    setCategory('');
    setDate(new Date().toISOString().split('T')[0]);
    setPaymentMethod('credit_card');

    onClose();
  };


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-badge">
              <span className="material-symbols-outlined">receipt_long</span>
            </div>
            <h2 className="modal-title">Add Expense</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="modal-form">
          {/* Hero Amount Field */}
          <div className="hero-amount-wrapper">
            <label className="amount-label">Amount</label>
            <div className="amount-input-group">
              <span className="currency-symbol">₹</span>
              <input
                type="number"
                step="0.01"
                placeholder="0.00"
                className="amount-input"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                autoFocus
                required
              />
            </div>
            <div className="amount-underline"></div>
          </div>

          {/* Form Fields Grid */}
          <div className="form-grid">
            {/* Description */}
            <div className="form-field full-width">
              <label htmlFor="description" className="field-label">Description</label>
              <input
                id="description"
                type="text"
                className="form-input"
                placeholder="What was this for?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            {/* Category */}
            <div className="form-field">
              <label htmlFor="category" className="field-label">Category</label>
              <select
                id="category"
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled>Select category</option>
                <option value="food">Food & Dining</option>
                <option value="transport">Transportation</option>
                <option value="housing">Housing & Utilities</option>
                <option value="entertainment">Entertainment</option>
                <option value="shopping">Shopping</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Date */}
            <div className="form-field">
              <label htmlFor="date" className="field-label">Date</label>
              <input
                id="date"
                type="date"
                className="form-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            {/* Payment Method Tile Group */}
            <div className="form-field full-width">
              <label className="field-label">Payment Method</label>
              <div className="payment-grid">
                <label className={`payment-tile ${paymentMethod === 'credit_card' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="payment_method"
                    value="credit_card"
                    checked={paymentMethod === 'credit_card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <span className="material-symbols-outlined">credit_card</span>
                  <span className="tile-text">Credit Card</span>
                </label>

                <label className={`payment-tile ${paymentMethod === 'cash' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="payment_method"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <span className="material-symbols-outlined">payments</span>
                  <span className="tile-text">Cash</span>
                </label>

                <label className={`payment-tile ${paymentMethod === 'bank_transfer' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="payment_method"
                    value="bank_transfer"
                    checked={paymentMethod === 'bank_transfer'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <span className="material-symbols-outlined">account_balance</span>
                  <span className="tile-text">Bank Transfer</span>
                </label>

                <label className={`payment-tile ${paymentMethod === 'upi' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="payment_method"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <span className="material-symbols-outlined">qr_code_2</span>
                  <span className="tile-text">UPI</span>
                </label>
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              <span className="material-symbols-outlined">save</span>
              <span>Save Expense</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpenseModal;
