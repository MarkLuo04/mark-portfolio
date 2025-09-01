import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Navigation.css';

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <a href="#hero" className="nav-link">
          <span className="nav-icon">H</span>
        </a>
        <a href="#about" className="nav-link">
          <span className="nav-icon">A</span>
        </a>
        <a href="#projects" className="nav-link">
          <span className="nav-icon">P</span>
        </a>
        <a href="#experience" className="nav-link">
          <span className="nav-icon">E</span>
        </a>
        <a href="#skills" className="nav-link">
          <span className="nav-icon">S</span>
        </a>
        <a href="#awards" className="nav-link">
          <span className="nav-icon">T</span>
        </a>
        <button 
          className="nav-link theme-toggle" 
          onClick={toggleTheme}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="nav-icon">
            {isDarkMode ? '☀️' : '🌙'}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
