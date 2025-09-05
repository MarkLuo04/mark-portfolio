import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section className="skills section-mini" id="skills">
      <div className="section-container">
        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          <h2 className="section-header-mini">Skills</h2>
        </ScrollAnimation>
        
        <div className="skills-bubbles section-content-mini">
          <ScrollAnimation animation="bounceIn" delay={0.4} duration={0.5}><span className="skill-bubble">Python</span></ScrollAnimation>
          <ScrollAnimation animation="bounceIn" delay={0.5} duration={0.5}><span className="skill-bubble">Java</span></ScrollAnimation>
          <ScrollAnimation animation="bounceIn" delay={0.6} duration={0.5}><span className="skill-bubble">Bash</span></ScrollAnimation>
          <ScrollAnimation animation="bounceIn" delay={0.7} duration={0.5}><span className="skill-bubble">C</span></ScrollAnimation>
          <ScrollAnimation animation="bounceIn" delay={0.8} duration={0.5}><span className="skill-bubble">HTML</span></ScrollAnimation>
          <ScrollAnimation animation="bounceIn" delay={0.9} duration={0.5}><span className="skill-bubble">CSS</span></ScrollAnimation>
          <ScrollAnimation animation="bounceIn" delay={1.0} duration={0.5}><span className="skill-bubble">JavaScript</span></ScrollAnimation>
          <ScrollAnimation animation="bounceIn" delay={1.1} duration={0.5}><span className="skill-bubble">Git</span></ScrollAnimation>
          <ScrollAnimation animation="bounceIn" delay={1.2} duration={0.5}><span className="skill-bubble">React</span></ScrollAnimation>
          <ScrollAnimation animation="bounceIn" delay={1.3} duration={0.5}><span className="skill-bubble">Node.js</span></ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Skills;
