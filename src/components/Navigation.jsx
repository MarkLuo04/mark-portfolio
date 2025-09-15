import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useSectionDetection } from '../hooks/useSectionDetection';
import { Home, Briefcase, Code, Award, Mail, Sun, Moon } from 'lucide-react';
import '../styles/Navigation.css';

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [navClicked, setNavClicked] = useState(false);
  const [clickTimeout, setClickTimeout] = useState(null);
  
  // Use automatic section detection
  const detectedSection = useSectionDetection();
  
  // Map sections to navigation icons 
  const activeSection = detectedSection === 'skills' ? 'projects' : detectedSection;

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

  // Scroll direction detection for navigation hide/show
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      // Ignore scroll events for 1 second after a nav click
      if (navClicked) {
        return;
      }
      
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingDown(true);
        setNavClicked(false); // Reset clicked state when user manually scrolls down
      } else {
        // Scrolling up or at top - show nav
        setIsScrollingDown(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navClicked]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (clickTimeout) {
        clearTimeout(clickTimeout);
      }
    };
  }, [clickTimeout]);

  const handleNavClick = () => {
    // Keep navigation visible after clicking a nav link
    setNavClicked(true);
    setIsScrollingDown(false);
    
    // Clear any existing timeout
    if (clickTimeout) {
      clearTimeout(clickTimeout);
    }
    
    // Set a new timeout to reset the clicked state after 2 seconds
    const timeout = setTimeout(() => {
      setNavClicked(false);
    }, 2000);
    
    setClickTimeout(timeout);
  };

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
    <nav className={`nav-container ${(isScrollingDown && !navClicked) ? 'nav-hidden' : 'nav-visible'}`}>
      <div className="nav-content">
        <div className="nav-links">
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={handleNavClick}>
            <div className="nav-icon-container">
              <Home className="nav-icon" />
            </div>
          </a>
          <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={handleNavClick}>
            <Briefcase className="nav-icon" />
          </a>
          <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={handleNavClick}>
            <Code className="nav-icon" />
          </a>
          <a href="#awards" className={`nav-link ${activeSection === 'awards' ? 'active' : ''}`} onClick={handleNavClick}>
            <Award className="nav-icon" />
          </a>
          <a href="#footer" className={`nav-link ${activeSection === 'footer' ? 'active' : ''}`} onClick={handleNavClick}>
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