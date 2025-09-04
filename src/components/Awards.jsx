import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, GraduationCap, Github } from 'lucide-react';
import '../styles/Awards.css';

const Awards = () => {
  const [expandedCards, setExpandedCards] = useState({
    qsaoCaseComp: false,
    bioHackathon: false,
    deansList: false,
    rcmLevel10: false,
    rcmTeaching: false,
    webDevCerts: false
  });

  const toggleExpanded = (cardKey) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardKey]: !prev[cardKey]
    }));
  };

  return (
    <section className="awards section" id="awards">
      <div className="section-container">
        <h2 className="section-header">Awards & Certifications</h2>
        
        <div className="awards-grid">
          {/* Hackathon Winner */}
          <div className="award-card">
            <div className="award-icon">
              <Star size={24} />
            </div>
            <div className="award-content">
              <h3 className="award-title">1st Place at QSAO Case Competition</h3>
              <p className="award-issuer">Queen's Sports Analytics Organization</p>
              <p className="award-date">Mar 2024</p>
              {expandedCards.qsaoCaseComp && (
                <div className="award-expanded">
                  <p className="award-description">
                    Won 1st place in case competition by acting as analytics consultants for the Memphis Grizzlies through data-driven strategies.
                  </p>
                </div>
              )}
            </div>
            <button 
              className="expand-button"
              onClick={() => toggleExpanded('qsaoCaseComp')}
            >
              {expandedCards.qsaoCaseComp ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {/* BioHackathon Award*/}
          <div className="award-card">
            <div className="award-icon">
              <Star size={24} />
            </div>
            <div className="award-content">
              <h3 className="award-title">High Impact Potential Award</h3>
              <p className="award-issuer">Queen's Synapsis BioHackathon</p>
              <p className="award-date">Nov 2023</p>
              {expandedCards.bioHackathon && (
                <div className="award-expanded">
                  <p className="award-description">
                    Won high impact award in the Synapsis BioHackathon 2025 for our project in optimizing clinical trial recruitment.
                  </p>
                </div>
              )}
            </div>
            <button
              className="expand-button"
              onClick={() => toggleExpanded('bioHackathon')}
            >
              {expandedCards.bioHackathon ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {/* Dean's List */}
          <div className="award-card">
            <div className="award-icon">
              <Star size={24} />
            </div>
            <div className="award-content">
              <h3 className="award-title">Dean's Honours List</h3>
              <p className="award-issuer">Queen's University</p>
              <p className="award-date">Fall 2024</p>
              {expandedCards.deansList && (
                <div className="award-expanded">
                  <p className="award-description">
                    Placed on the Dean's Honour List with a 3.94 cumulative GPA
                  </p>
                </div>
              )}
            </div>
            <button 
              className="expand-button"
              onClick={() => toggleExpanded('deansList')}
            >
              {expandedCards.deansList ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {/* RCM Level 10 Certificate */}
          <div className="award-card">
            <div className="award-icon certification">
              <GraduationCap size={24} />
            </div>
            <div className="award-content">
              <h3 className="award-title">RCM Level 10 Certificate</h3>
              <p className="award-issuer">Royal Conservatory of Music</p>
              <p className="award-date">2018</p>
              {expandedCards.rcmLevel10 && (
                <div className="award-expanded">
                  <p className="award-description">
                    Completed Royal Conservatory of Music Level 10 Certificate which encompasses practical, theory and history exams. 
                  </p>
                </div>
              )}
            </div>
            <button 
              className="expand-button"
              onClick={() => toggleExpanded('rcmLevel10')}
            >
              {expandedCards.rcmLevel10 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {/* RCM Teaching Elementary Piano Course */}
          <div className="award-card">
            <div className="award-icon certification">
              <GraduationCap size={24} />
            </div>
            <div className="award-content">
              <h3 className="award-title">RCM Teaching Elementary Piano Course</h3>
              <p className="award-issuer">Royal Conservatory of Music</p>
              <p className="award-date">April 2025</p>
              {expandedCards.rcmTeaching && (
                <div className="award-expanded">
                  <p className="award-description">
                    Completed guided online course that provided pedagogical instruction on teaching elementary-level piano students through the Royal Conservatory of Music curriculum.
                  </p>
                </div>
              )}
            </div>
            <button 
              className="expand-button"
              onClick={() => toggleExpanded('rcmTeaching')}
            >
              {expandedCards.rcmTeaching ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {/* Web Development Certifications */}
          <div className="award-card">
            <div className="award-icon certification">
              <GraduationCap size={24} />
            </div>
            <div className="award-content">
              <h3 className="award-title">Web Development Certifications</h3>
              <p className="award-issuer">TOP, fCC, Scrimba</p>
              <p className="award-date">Jan 2024</p>
              {expandedCards.webDevCerts && (
                <div className="award-expanded">
                  <div className="certification-details">
                    <h4 className="courses-header">Completed Courses:</h4>
                    <ul className="courses-list">
                      <li>Completed responsive design course</li>
                      <li>Completed Javascript OOP course</li>
                      <li>Completed scrimba react course</li>
                      <li>Completed the odin project fundamentals course</li>
                    </ul>
                    <div className="github-projects">
                      <Github size={16} />
                      <span>Some projects from these courses can be found in my GitHub</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button 
              className="expand-button"
              onClick={() => toggleExpanded('webDevCerts')}
            >
              {expandedCards.webDevCerts ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
