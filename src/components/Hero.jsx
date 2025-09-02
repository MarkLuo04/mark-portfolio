import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <div className="profile-picture">
          <div className="profile-bubble">👤</div>
        </div>
        <h1 className="hero-name">Mark Luo</h1>
        <p className="hero-tagline">Queen's Computing Student specializing in Software Design</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">View Projects</button>
          <button className="btn btn-secondary">Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
