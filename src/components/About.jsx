import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="section-container">
        <h2 className="section-header">About Me</h2>
        
        <div className="about-content">
          <div className="about-left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
          <div className="about-right">
            <div className="info-section">
              <h3>Education</h3>
              <ul>
                <li>Bachelor of Big Brain</li>
                <li>University</li>
                <li>GPA</li>
              </ul>
            </div>
            
            <div className="info-section">
              <h3>Interests</h3>
              <ul>
                <li>Web Development</li>
                <li>Programming Stuff</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
