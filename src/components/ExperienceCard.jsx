import React, { useState } from 'react';
import { MapPin, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const ExperienceCard = ({ 
  id,
  title, 
  company, 
  summary, 
  dateRange, 
  location, 
  description, 
  images = [],
  animation = "fadeInLeft", 
  delay = 0 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const maxIndex = images.length - 1;
    setCurrentImageIndex(prev => prev === maxIndex ? 0 : prev + 1);
  };

  const prevImage = () => {
    const maxIndex = images.length - 1;
    setCurrentImageIndex(prev => prev === 0 ? maxIndex : prev - 1);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const currentImage = images[currentImageIndex];

  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="experience-card">
        {/* Minimalistic View */}
        <div className="experience-minimal">
          <div className="experience-basic">
            <h3 className="job-title">{title}</h3>
            <span className="company-name">{company}</span>
            <p className="experience-summary">{summary}</p>
          </div>
          <button 
            className="expand-button"
            onClick={toggleExpanded}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        {/* Expanded Content */}
        {isExpanded && (
          <div className="experience-expanded">
            <div className="experience-header">
              {images.length > 0 && (
                <div className="experience-image-section">
                  <div 
                    className="experience-image-card" 
                    data-alt="Image not available" 
                    data-description={currentImage?.description}
                  >
                    <img 
                      src={currentImage?.src}
                      alt={currentImage?.alt}
                    />
                    
                    {/* Image Counter */}
                    <div className="image-counter">
                      {currentImageIndex + 1}/{images.length}
                    </div>
                    
                    {/* Navigation Arrows */}
                    <button 
                      className="carousel-arrow carousel-arrow-left"
                      onClick={prevImage}
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      className="carousel-arrow carousel-arrow-right"
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="image-indicators">
                      {images.map((_, index) => (
                        <span 
                          key={index}
                          className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                    
                    {/* Hover Description Overlay */}
                    <div className="image-description-overlay">
                      {currentImage?.description}
                    </div>
                  </div>
                </div>
              )}
              
              <div className="experience-content">
                <div className="experience-meta">
                  <span className="date-range">{dateRange}</span>
                  <div className="location">
                    <MapPin size={16} />
                    <span>{location}</span>
                  </div>
                </div>
                <p className="job-description">{description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
