import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Home, User, Briefcase, Code, Award, Mail, Sun, Moon } from 'lucide-react';
import '../styles/Navigation.css';

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Hide tooltip after 8 seconds total (5 seconds visible)
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleThemeToggle = () => {
    toggleTheme();
    setShowTooltip(false); // Hide tooltip when user clicks toggle
    
    // Reset tooltip to show again after theme change
    setTimeout(() => {
      setShowTooltip(true);
    }, 1000); // Show after 1 second
    
    // Hide tooltip again after 5 seconds
    setTimeout(() => {
      setShowTooltip(false);
    }, 6000); // Hide after 6 seconds total
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="nav-links">
          <a href="#home" className="nav-link active">
            <div className="nav-icon-container">
              <Home className="nav-icon" />
            </div>
          </a>
          <a href="#about" className="nav-link">
            <User className="nav-icon" />
          </a>
          <a href="#experience" className="nav-link">
            <Briefcase className="nav-icon" />
          </a>
          <a href="#projects" className="nav-link">
            <Code className="nav-icon" />
          </a>
          <a href="#awards" className="nav-link">
            <Award className="nav-icon" />
          </a>
          <a href="#footer" className="nav-link">
            <Mail className="nav-icon" />
          </a>
          <div className="nav-separator"></div>
          <div className="theme-toggle-container">
            <button onClick={handleThemeToggle} className="nav-theme-toggle">
              {isDarkMode ? <Sun className="nav-icon" /> : <Moon className="nav-icon" />}
            </button>
            {showTooltip && (
              <div className="theme-tooltip">
                Try {isDarkMode ? 'Light' : 'Dark'} mode!
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
