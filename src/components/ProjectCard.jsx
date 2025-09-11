import React from 'react';
import { FolderOpen, ExternalLink } from 'lucide-react';

const ProjectCard = ({ 
  image, 
  title, 
  category, 
  description, 
  technologies, 
  codeLink, 
  demoLink, 
  animation = "fadeInUp", 
  delay = 0 
}) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <span className="project-category">{category}</span>
        </div>
        <p className="project-description">
          {description}
        </p>
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-actions">
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-secondary">
              <span className="btn-icon">
                <FolderOpen size={16} />
              </span>
              Code
            </button>
          </a>
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
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
  );
};

export default ProjectCard;
