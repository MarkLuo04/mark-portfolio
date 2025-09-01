import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="#" className="social-link">
            <span className="social-icon">📧</span>
          </a>
          <a href="#" className="social-link">
            <span className="social-icon">🐙</span>
          </a>
          <a href="#" className="social-link">
            <span className="social-icon">💼</span>
          </a>
          <a href="#" className="social-link">
            <span className="social-icon">🐦</span>
          </a>
        </div>
        <div className="footer-credits">
          <p>© 2024 Your Name. All rights reserved.</p>
          <p>Built with React & Vite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
