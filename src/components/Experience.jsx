import React, { useState } from 'react';
import { MapPin, Briefcase, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Experience.css';
import recapArticleImage from '../images/recap-article.png';
import awardArticleImage from '../images/award-prediction-article.png';
import qsaoAwardImage from '../images/qsao-awards.png';
import qsaoHackathonImage from '../images/qsao-casecomp.png';
import biohackathonAwardImage from '../images/biohackathon-award.png';
import biohackathonPresentationImage from '../images/biohackathon-presentation.png';
import ardensImage from '../images/ardens.jpg';
import ardensStudioImage from '../images/ardens-studio.jpg';

const Experience = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({
    experience1: 0,
    experience2: 0,
    experience3: 0,
    experience4: 0
  });

  const [expandedSections, setExpandedSections] = useState({
    experience1: false,
    experience2: false,
    experience3: false,
    experience4: false
  });

  // Image arrays for each experience
  const experience1Images = [
    {
      src: recapArticleImage,
      alt: "NBA Trade Deadline Recap Article",
      description: "Article written: A recap of the biggest trades"
    },
    {
      src: awardArticleImage,
      alt: "NBA Awards Prediction Article",
      description: "Article written: Mid-season NBA Awards prediction"
    },
    {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      alt: "Basketball Data",
      description: "Data analysis and visualization sessions - working with complex datasets to extract meaningful insights for strategic decision-making."
    }
  ];

  const experience2Images = [
    {
      src: qsaoHackathonImage,
      alt: "QSAO Hackathon",
      description: "Where the Case Competition/Hackathon took place"
    },
    {
      src: qsaoAwardImage,
      alt: "QSAO Award",
      description: "Taking home 1st place - sorry for the poor quality photo!"
    }
  ];

  const experience3Images = [
    {
      src: biohackathonPresentationImage,
      alt: "BioHackathon Presentation",
      description: "Presenting our AI-powered platform solution"
    },
    {
      src: biohackathonAwardImage,
      alt: "BioHackathon Award",
      description: "High Impact Potential Award certificate"
    },
  ];

  const experience4Images = [
    {
      src: ardensImage,
      alt: "Arden's Music Teaching Room",
      description: "Teaching section of Arden's Music"
    },
    {
      src: ardensStudioImage,
      alt: "Teaching Studio Room",
      description: "My Teaching Studio!"
    },
  ];

  const nextImage = (experienceKey) => {
    const imageArrays = {
      experience1: experience1Images,
      experience2: experience2Images,
      experience3: experience3Images,
      experience4: experience4Images
    };
    const maxIndex = imageArrays[experienceKey].length - 1;
    setCurrentImageIndex(prev => ({
      ...prev,
      [experienceKey]: prev[experienceKey] === maxIndex ? 0 : prev[experienceKey] + 1
    }));
  };

  const prevImage = (experienceKey) => {
    const imageArrays = {
      experience1: experience1Images,
      experience2: experience2Images,
      experience3: experience3Images,
      experience4: experience4Images
    };
    const maxIndex = imageArrays[experienceKey].length - 1;
    setCurrentImageIndex(prev => ({
      ...prev,
      [experienceKey]: prev[experienceKey] === 0 ? maxIndex : prev[experienceKey] - 1
    }));
  };

  const toggleExpanded = (experienceKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [experienceKey]: !prev[experienceKey]
    }));
  };

  return (
    <section className="experience section" id="experience">
      <div className="section-container">
        <h2 className="section-header">My Experiences</h2>
        
        <div className="experience-timeline">
          {/* Timeline Line */}
          <div className="timeline-line"></div>
          
          {/* First Experience - Data Analyst */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="experience-card">
              {/* Minimalistic View */}
              <div className="experience-minimal">
                <div className="experience-basic">
                  <h3 className="job-title">Data Analyst</h3>
                  <span className="company-name">Queen's Sports Analytics Organization</span>
                  <p className="experience-summary">
                    Sports data analyst conducting research and analysis on basketball statistics to write articles on NBA topics.
                  </p>
                                      <button 
                        className="expand-button"
                        onClick={() => toggleExpanded('experience1')}
                    >
                        {expandedSections.experience1 ? 'Show Less' : 'Click to see more details'}
                    </button>
                </div>
              </div>
              
              {/* Expanded Content */}
              {expandedSections.experience1 && (
                <div className="experience-expanded">
                  <div className="experience-header">
                    <div className="experience-image-section">
                      <div className="experience-image-card" data-alt="Image not available" data-description={experience1Images[currentImageIndex.experience1].description}>
                        <img 
                          src={experience1Images[currentImageIndex.experience1].src}
                          alt={experience1Images[currentImageIndex.experience1].alt}
                        />
                        
                        {/* Image Counter */}
                        <div className="image-counter">
                          {currentImageIndex.experience1 + 1}/{experience1Images.length}
                        </div>
                        
                        {/* Navigation Arrows */}
                        <button 
                          className="carousel-arrow carousel-arrow-left"
                          onClick={() => prevImage('experience1')}
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button 
                          className="carousel-arrow carousel-arrow-right"
                          onClick={() => nextImage('experience1')}
                          aria-label="Next image"
                        >
                          <ChevronRight size={20} />
                        </button>
                        
                        {/* Image Indicators */}
                        <div className="image-indicators">
                          {experience1Images.map((_, index) => (
                            <span 
                              key={index}
                              className={`indicator ${index === currentImageIndex.experience1 ? 'active' : ''}`}
                              onClick={() => setCurrentImageIndex(prev => ({ ...prev, experience1: index }))}
                            />
                          ))}
                        </div>
                        
                        {/* Hover Description Overlay */}
                        <div className="image-description-overlay">
                          {experience1Images[currentImageIndex.experience1].description}
                        </div>
                      </div>
                    </div>
                    
                    <div className="experience-content">
                      <div className="experience-meta">
                        <span className="date-range">Sept 2024 - May 2025</span>
                        <div className="location">
                          <MapPin size={16} />
                          <span>Kingston, ON</span>
                        </div>
                      </div>
                                            <p className="job-description">
                        As a sports data analyst for the QSAO Basketball team, I conducted research and analysis on NBA topics. I collected and interpreted data from reputable sources such as NBA.com, ESPN Analytics, and Basketball Reference to generate insights and write articles on various NBA news and trends. 
                      </p>
                      

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Second Experience - Case Competition */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="experience-card">
              {/* Minimalistic View */}
              <div className="experience-minimal">
                <div className="experience-basic">
                  <h3 className="job-title">Case Competition and Hackathon</h3>
                  <span className="company-name">Queen's Sports Analytics Organization</span>
                  <p className="experience-summary">
                    Won 1st place in case competition by acting as analytics consultants for the Memphis Grizzlies through data-driven strategies.
                  </p>
                                      <button 
                        className="expand-button"
                        onClick={() => toggleExpanded('experience2')}
                    >
                        {expandedSections.experience2 ? 'Show Less' : 'Click to see more details'}
                    </button>
                </div>
              </div>
              
              {/* Expanded Content */}
              {expandedSections.experience2 && (
                <div className="experience-expanded">
                  <div className="experience-header">
                    <div className="experience-image-section">
                      <div className="experience-image-card" data-alt="Image not available" data-description={experience2Images[currentImageIndex.experience2].description}>
                        <img 
                          src={experience2Images[currentImageIndex.experience2].src}
                          alt={experience2Images[currentImageIndex.experience2].alt}
                        />
                        
                        {/* Image Counter */}
                        <div className="image-counter">
                          {currentImageIndex.experience2 + 1}/{experience2Images.length}
                        </div>
                        
                        {/* Navigation Arrows */}
                        <button 
                          className="carousel-arrow carousel-arrow-left"
                          onClick={() => prevImage('experience2')}
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button 
                          className="carousel-arrow carousel-arrow-right"
                          onClick={() => nextImage('experience2')}
                          aria-label="Next image"
                        >
                          <ChevronRight size={20} />
                        </button>
                        
                        {/* Image Indicators */}
                        <div className="image-indicators">
                          {experience2Images.map((_, index) => (
                            <span 
                              key={index}
                              className={`indicator ${index === currentImageIndex.experience2 ? 'active' : ''}`}
                              onClick={() => setCurrentImageIndex(prev => ({ ...prev, experience2: index }))}
                            />
                          ))}
                        </div>
                        
                        {/* Hover Description Overlay */}
                        <div className="image-description-overlay">
                          {experience2Images[currentImageIndex.experience2].description}
                        </div>
                      </div>
                    </div>
                    
                    <div className="experience-content">
                      <div className="experience-meta">
                        <span className="date-range">March 2025</span>
                        <div className="location">
                          <MapPin size={16} />
                          <span>Kingston, ON</span>
                        </div>
                      </div>
                      <p className="job-description">
                        Our role was to act as analytics consultants for a given NBA team and craft a data-driven strategy to secure future success. This included analyzing the team, building a player valuation framework, proposing free agent acquisitions, all while staying within the NBA's projected salary cap. Using player data provided in .xlsx format and visualizing our graphs in R, we created a compelling case for securing the future of the Memphis Grizzlies.
                      </p>
                      


                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Third Experience - Synapsis BioHackathon */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="experience-card">
              {/* Minimalistic View */}
              <div className="experience-minimal">
                <div className="experience-basic">
                  <h3 className="job-title">Synapsis BioHackathon 2025</h3>
                  <span className="company-name">Queen's Synapsis BioTech</span>
                  <p className="experience-summary">
                    Won high impact award in the Synapsis BioHackathon 2025 for our project in optimizing clinical trial recruitment.
                  </p>
                                      <button 
                        className="expand-button"
                        onClick={() => toggleExpanded('experience3')}
                    >
                        {expandedSections.experience3 ? 'Show Less' : 'Click to see more details'}
                    </button>
                </div>
              </div>
              
              {/* Expanded Content */}
              {expandedSections.experience3 && (
                <div className="experience-expanded">
                  <div className="experience-header">
                    <div className="experience-image-section">
                      <div className="experience-image-card" data-alt="Image not available" data-description={experience3Images[currentImageIndex.experience3].description}>
                        <img 
                          src={experience3Images[currentImageIndex.experience3].src}
                          alt={experience3Images[currentImageIndex.experience3].alt}
                        />
                        
                        {/* Image Counter */}
                        <div className="image-counter">
                          {currentImageIndex.experience3 + 1}/{experience3Images.length}
                        </div>
                        
                        {/* Navigation Arrows */}
                        <button 
                          className="carousel-arrow carousel-arrow-left"
                          onClick={() => prevImage('experience3')}
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button 
                          className="carousel-arrow carousel-arrow-right"
                          onClick={() => nextImage('experience3')}
                          aria-label="Next image"
                        >
                          <ChevronRight size={20} />
                        </button>
                        
                        {/* Image Indicators */}
                        <div className="image-indicators">
                          {experience3Images.map((_, index) => (
                            <span 
                              key={index}
                              className={`indicator ${index === currentImageIndex.experience3 ? 'active' : ''}`}
                              onClick={() => setCurrentImageIndex(prev => ({ ...prev, experience3: index }))}
                            />
                          ))}
                        </div>
                        
                        {/* Hover Description Overlay */}
                        <div className="image-description-overlay">
                          {experience3Images[currentImageIndex.experience3].description}
                        </div>
                      </div>
                    </div>
                    
                    <div className="experience-content">
                      <div className="experience-meta">
                        <span className="date-range">March 2025</span>
                        <div className="location">
                          <MapPin size={16} />
                          <span>Kingston, ON</span>
                        </div>
                      </div>
                                            <p className="job-description">
                        Awarded the High Impact Potential Award at the Synapsis BioHackathon 2025 for developing an innovative solution to optimize clinical trial recruitment. We designed and pitched a centralized, AI-powered platform that functions like LinkedIn, but for clinical trials. This solution improves patient recruitment by securely matching individuals with studies using their encrypted health data. To further encourage participation, we incorporated a gamified reward system, all while prioritizing ethical data privacy and regulatory compliance.
                      </p>
                      

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Fourth Experience - Piano Teacher */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="experience-card">
              {/* Minimalistic View */}
              <div className="experience-minimal">
                <div className="experience-basic">
                  <h3 className="job-title">Piano Teacher</h3>
                  <span className="company-name">Arden's Music</span>
                  <p className="experience-summary">
                    Instructing students in practical piano lessons and music theory, helping them develop both technical skills and musicality on the piano.
                  </p>
                                      <button 
                        className="expand-button"
                        onClick={() => toggleExpanded('experience4')}
                    >
                        {expandedSections.experience4 ? 'Show Less' : 'Click to see more details'}
                    </button>
                </div>
              </div>
              
              {/* Expanded Content */}
              {expandedSections.experience4 && (
                <div className="experience-expanded">
                  <div className="experience-header">
                    <div className="experience-image-section">
                      <div className="experience-image-card" data-alt="Image not available" data-description={experience4Images[currentImageIndex.experience4].description}>
                        <img 
                          src={experience4Images[currentImageIndex.experience4].src}
                          alt={experience4Images[currentImageIndex.experience4].alt}
                        />
                        
                        {/* Image Counter */}
                        <div className="image-counter">
                          {currentImageIndex.experience4 + 1}/{experience4Images.length}
                        </div>
                        
                        {/* Navigation Arrows */}
                        <button 
                          className="carousel-arrow carousel-arrow-left"
                          onClick={() => prevImage('experience4')}
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button 
                          className="carousel-arrow carousel-arrow-right"
                          onClick={() => nextImage('experience4')}
                          aria-label="Next image"
                        >
                          <ChevronRight size={20} />
                        </button>
                        
                        {/* Image Indicators */}
                        <div className="image-indicators">
                          {experience4Images.map((_, index) => (
                            <span 
                              key={index}
                              className={`indicator ${index === currentImageIndex.experience4 ? 'active' : ''}`}
                              onClick={() => setCurrentImageIndex(prev => ({ ...prev, experience4: index }))}
                            />
                          ))}
                        </div>
                        
                        {/* Hover Description Overlay */}
                        <div className="image-description-overlay">
                          {experience4Images[currentImageIndex.experience4].description}
                        </div>
                      </div>
                    </div>
                    
                    <div className="experience-content">
                      <div className="experience-meta">
                        <span className="date-range">August 2023 - Present</span>
                        <div className="location">
                          <MapPin size={16} />
                          <span>Kingston, ON</span>
                        </div>
                      </div>
                                            <p className="job-description">
                        I teach students of all ages and skill levels, evaluating their progress and needs and preparing lessons that will help them achieve their goals. I prepare them for recitals and performances at Arden’s music events, and I have also guided students through RCM levels, theory, and exam preparation. Above all, I encourage each student to explore the music they enjoy and nurture their love for playing the piano. 
                      </p>
                      

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
