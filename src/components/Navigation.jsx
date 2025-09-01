import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Home, User, Briefcase, Code, Award, Mail, Sun, Moon } from 'lucide-react';
import '../styles/Navigation.css';

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useTheme();

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
          <button onClick={toggleTheme} className="nav-theme-toggle">
            {isDarkMode ? <Sun className="nav-icon" /> : <Moon className="nav-icon" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
