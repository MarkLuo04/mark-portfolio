import React from 'react';
import { Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        {/* Let's Connect Section */}
        <div className="lets-connect">
          <h2 className="connect-title">Connect with me!</h2>
          <div className="connect-social">
            <a href="mailto:mluo9987@gmail.com" className="social-link">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mark-luo-879a96326/" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/MarkLuo04" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://www.instagram.com/_markluo/" className="social-link">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="footer-credits">
          <div className="credits-content">
            <p>© 2025 Mark Luo. Built with React & Vite</p>
            <p>View how I designed and developed this portfolio. <a href="https://github.com/MarkLuo04/mark-portfolio" className="github-link">Source code on GitHub</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
