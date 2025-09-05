import React from 'react';
import { FolderOpen, ExternalLink, Github } from 'lucide-react';
import '../styles/Projects.css';
import typevibeImage from '../images/typevibe.png';
import calculatorImage from '../images/js-calculator.png';
import modellingImage from '../images/modellingproject.png';

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="section-container">
        <h2 className="section-header">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={typevibeImage} alt="Mood Playlist Generator" />
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">Mood Playlist Generator</h3>
                <span className="project-category">Full-Stack</span>
              </div>
              <p className="project-description">
                A mood playlist generator that takes user input and generates a playlist of songs based on the user's mood. The UI features reusable React components for mood input, playlist customization, playlist cards, and more. The backend processes keywords such as "chill", "ambient", or "pop" and uses Spotify's Web API for tailored song suggestions.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Typescript</span>
                <span>CSS</span>
              </div>
              <div className="project-actions">
                <a href="https://github.com/Jiayel9/TypeVibe" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-secondary">
                    <span className="btn-icon">
                      <FolderOpen size={16} />
                    </span>
                    Code
                  </button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">
                    <span className="btn-icon">
                      <ExternalLink size={16} />
                    </span>
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={calculatorImage} alt="Calculator App" />
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">Minimalist Calculator App</h3>
                <span className="project-category">Frontend</span>
              </div>
              <p className="project-description">
                A clean and minimalist JavaScript based calculator app designed with HTML and CSS. One of my earlier projects in my Web Dev journey from the Odin Project where I gained valuable foundational skills, and one that I am still proud of. Features full keyboard support and a back panel of the calculator for user instructions.
              </p>
              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <div className="project-actions">
                <a href="https://github.com/MarkLuo04/JS-calculator" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-secondary">
                    <span className="btn-icon">
                      <FolderOpen size={16} />
                    </span>
                    Code
                  </button>
                </a>
                <a href="https://markluo04.github.io/JS-calculator/" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">
                    <span className="btn-icon">
                      <ExternalLink size={16} />
                    </span>
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={modellingImage} alt="Battleship Cheats" />
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">Battleship Cheats</h3>
                <span className="project-category">Logic and Modelling</span>
              </div>
              <p className="project-description">
                A modeling project for Logic for Computing Science that puts a twist on the classic two-player strategy game Battleship. Players can “cheat” by shifting ships to avoid incoming shots. The game’s behavior is represented using logical propositions and constraints. Used Jape to model and prove the logical statements.
              </p>
              <div className="project-tech">
                <span>Logic</span>
                <span>Python</span>
                <span>Jape</span>
                <span>Terminal</span>
              </div>
              <div className="project-actions">
                <a href="https://github.com/MarkLuo04/battleship-cheats" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-secondary">
                    <span className="btn-icon">
                      <FolderOpen size={16} />
                    </span>
                    Code
                  </button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">
                    <span className="btn-icon">
                      <ExternalLink size={16} />
                    </span>
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-cta">
          <a href="https://github.com/MarkLuo04" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-secondary btn-large">
              <Github size={18} />
              <span>View more projects on my GitHub</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
