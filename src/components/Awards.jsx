import React from 'react';
import './Awards.css';

const Awards = () => {
  return (
    <section className="awards" id="awards">
      <div className="awards-container">
        <h2 className="section-header">Awards & Certifications</h2>
        
        <div className="awards-grid">
          <div className="award-card">
            <div className="award-icon">🏆</div>
            <h3>Award 1</h3>
            <p className="award-issuer">University Name</p>
            <p className="award-date">2023</p>
            <p className="award-description">Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          
          <div className="award-card">
            <div className="award-icon">🏆</div>
            <h3>Award 1</h3>
            <p className="award-issuer">University Name</p>
            <p className="award-date">2023</p>
            <p className="award-description">Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          
          <div className="award-card">
            <div className="award-icon">🏆</div>
            <h3>Award 1</h3>
            <p className="award-issuer">University Name</p>
            <p className="award-date">2023</p>
            <p className="award-description">Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
