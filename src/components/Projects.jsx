import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="section-container">
        <h2 className="section-header">Projects</h2>
        
        <div className="projects-grid section-content">
          <div className="project-card">
            <div className="project-image">
              <div className="placeholder-image">📱</div>
            </div>
            <div className="project-content">
              <h3>Project 1</h3>
              <p>Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
              <div className="project-tech">
                <span>React</span>
                <span>React</span>
                <span>React</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">GitHub</a>
                <a href="#" className="project-link">Live Demo</a>
              </div>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <div className="placeholder-image">🌐</div>
            </div>
            <div className="project-content">
              <h3>Project 2</h3>
              <p>Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco.</p>
              <div className="project-tech">
                <span>React</span>
                <span>React</span>
                <span>React</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">GitHub</a>
                <a href="#" className="project-link">Live Demo</a>
              </div>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <div className="placeholder-image">🤖</div>
            </div>
            <div className="project-content">
              <h3>Project 3</h3>
              <p>Elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.</p>
              <div className="project-tech">
                <span>React</span>
                <span>React</span>
                <span>React</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">GitHub</a>
                <a href="#" className="project-link">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
