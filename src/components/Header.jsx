function Header({ searchTerm, setSearchTerm, theme, onToggleTheme, onToggleMobileSidebar }) {
  return (
    <header className="top-header">
      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={onToggleMobileSidebar} aria-label="Open Menu">
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Search Input Box */}
      <div className="search-container">
        <span className="material-symbols-outlined search-icon">search</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Header Actions */}
      <div className="header-actions">
        <button
          className="icon-btn"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <span className="material-symbols-outlined">
            {theme === 'light' ? 'dark_mode' : 'light_mode'}
          </span>
        </button>
        <button className="icon-btn" aria-label="Notifications">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="icon-btn" aria-label="Help">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgUm94YGpIk3ww8Hni2yVyQzfdai6ab56BeI4kDgSUhGiUlmIBINBxnGr9TSWo7wHfPLWjzRuPWGrZXs8C_v127zbUUIGeJ6gAJ8XUGdiEHBxPp-iHwdI2NVBwoi22YyZWmMRivoh3cE5kSsYg0-sRCOH2nxnx8WaUgFZE2AoQbWl9rwOIEKPwut5VsXM1hlKsQYS9yT_tPAn6FjecTcWmB1NDI-YNcU-y6XCvganGq3gl0o0yD1vo"
          alt="Chavan"
          className="header-avatar"
        />
      </div>
    </header>
  );
}

export default Header;
