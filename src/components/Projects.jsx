import React from 'react';
import { Github } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';
import typevibeImage from '../images/typevibe.png';
import calculatorImage from '../images/js-calculator.png';
import modellingImage from '../images/modellingproject.png';

const Projects = () => {
  const projectsData = [
    {
      id: 'typevibe',
      image: typevibeImage,
      title: 'Mood Playlist Generator',
      category: 'Full-Stack',
      description: 'A mood playlist generator that takes user input and generates a playlist of songs based on the user\'s mood. The UI features reusable React components for mood input, playlist customization, playlist cards, and more. The backend processes keywords such as "chill", "ambient", or "pop" and uses Spotify\'s Web API for tailored song suggestions.',
      technologies: ['React', 'Node.js', 'Next.js', 'Typescript'],
      codeLink: 'https://github.com/Jiayel9/TypeVibe',
      demoLink: '#',
      animation: 'fadeInUp',
      delay: 0.2
    },
    {
      id: 'calculator',
      image: calculatorImage,
      title: 'Minimalist Calculator App',
      category: 'Frontend',
      description: 'A clean and minimalist JavaScript based calculator app designed with HTML and CSS. One of my earlier projects in my Web Dev journey from the Odin Project where I gained valuable foundational skills, and one that I am still proud of. Features full keyboard support and a back panel of the calculator for user instructions.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com/MarkLuo04/JS-calculator',
      demoLink: 'https://markluo04.github.io/JS-calculator/',
      animation: 'fadeInUp',
      delay: 0.3
    },
    {
      id: 'battleship',
      image: modellingImage,
      title: 'Battleship Cheats',
      category: 'Logic and Modelling',
      description: 'A modeling project for Logic for Computing Science that puts a twist on the classic two-player strategy game Battleship. Players can "cheat" by shifting ships to avoid incoming shots. The game\'s behavior is represented using logical propositions and constraints. Used Jape to model and prove the logical statements.',
      technologies: ['Logic', 'Python', 'Jape', 'Terminal'],
      codeLink: 'https://github.com/MarkLuo04/battleship-cheats',
      demoLink: '#',
      animation: 'fadeInUp',
      delay: 0.4
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="section-container">
        <ScrollAnimation animation="fadeInUp" delay={0.1}>
          <h2 className="section-header">Projects</h2>
        </ScrollAnimation>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ScrollAnimation key={project.id} animation={project.animation} delay={project.delay}>
              <ProjectCard
                image={project.image}
                title={project.title}
                category={project.category}
                description={project.description}
                technologies={project.technologies}
                codeLink={project.codeLink}
                demoLink={project.demoLink}
              />
            </ScrollAnimation>
          ))}
        </div>
        <ScrollAnimation animation="fadeInUp" delay={0.5}>
          <div className="projects-cta">
          <a href="https://github.com/MarkLuo04" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-secondary btn-large">
              <Github size={18} />
              <span>View more projects on my GitHub</span>
            </button>
          </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Projects;
