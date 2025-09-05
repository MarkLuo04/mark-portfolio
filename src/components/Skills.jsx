import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section className="skills section-mini" id="skills">
      <div className="section-container">
        <h2 className="section-header-mini">Skills</h2>
        
        <div className="skills-bubbles section-content-mini">
          <span className="skill-bubble">Python</span>
          <span className="skill-bubble">Java</span>
          <span className="skill-bubble">Bash</span>
          <span className="skill-bubble">C</span>
          <span className="skill-bubble">HTML</span>
          <span className="skill-bubble">CSS</span>
          <span className="skill-bubble">JavaScript</span>
          <span className="skill-bubble">Git</span>
          <span className="skill-bubble">React</span>
          <span className="skill-bubble">Node.js</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
