import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="#" className="social-link">
            <span className="social-icon">🐙</span>
          </a>
          <a href="#" className="social-link">
            <span className="social-icon">💼</span>
          </a>
          <a href="#" className="social-link">
            <span className="social-icon">🐦</span>
          </a>
          <a href="#" className="social-link">
            <span className="social-icon">📧</span>
          </a>
        </div>
        
        <div className="footer-credits">
          <p>&copy; 2024 Mark Luo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
