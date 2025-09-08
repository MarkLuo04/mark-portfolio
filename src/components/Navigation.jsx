import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Home, Briefcase, Code, Award, Mail, Sun, Moon } from 'lucide-react';
import '../styles/Navigation.css';

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'awards', 'footer'];
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Special handling for footer - if we're near the bottom of the page, show footer as active
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection('footer');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
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
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>
            <div className="nav-icon-container">
              <Home className="nav-icon" />
            </div>
          </a>
          <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
            <Briefcase className="nav-icon" />
          </a>
          <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
            <Code className="nav-icon" />
          </a>
          <a href="#awards" className={`nav-link ${activeSection === 'awards' ? 'active' : ''}`}>
            <Award className="nav-icon" />
          </a>
          <a href="#footer" className={`nav-link ${activeSection === 'footer' ? 'active' : ''}`}>
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
