import React, { useState, useRef, useEffect } from 'react';
import { Star, ChevronDown, ChevronUp, GraduationCap, Github } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
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

  const [titleWrapping, setTitleWrapping] = useState({});

  // Function to detect if a title wraps
  const checkTitleWrapping = (titleRef, cardId) => {
    if (titleRef.current) {
      const titleElement = titleRef.current;
      const isWrapping = titleElement.scrollHeight > titleElement.clientHeight;
      setTitleWrapping(prev => ({
        ...prev,
        [cardId]: isWrapping
      }));
    }
  };

  // Create refs for each title
  const titleRefs = {
    qsaoCaseComp: useRef(null),
    bioHackathon: useRef(null),
    deansList: useRef(null),
    rcmLevel10: useRef(null),
    rcmTeaching: useRef(null),
    webDevCerts: useRef(null)
  };

  // Check wrapping on mount and when expanded state changes
  useEffect(() => {
    Object.keys(titleRefs).forEach(cardId => {
      checkTitleWrapping(titleRefs[cardId], cardId);
    });
  }, [expandedCards]);

  const toggleExpanded = (cardKey) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardKey]: !prev[cardKey]
    }));
  };

  return (
    <section className="awards section" id="awards">
      <div className="section-container">
        <ScrollAnimation animation="fadeInUp" delay={0.1}>
          <h2 className="section-header">Awards & Certifications</h2>
        </ScrollAnimation>
        
        <div className="awards-grid">
          {/* Hackathon Winner */}
          <ScrollAnimation animation="scaleIn" delay={0.2}>
            <div className={`award-card ${expandedCards.qsaoCaseComp ? 'expanded' : ''}`}>
            <div className="award-icon">
              <Star size={24} />
            </div>
            <div className={`award-content ${titleWrapping.qsaoCaseComp ? 'multi-line' : 'single-line'}`}>
              <div className="award-content-top">
                <h3 ref={titleRefs.qsaoCaseComp} className="award-title">1st Place at QSAO Case Competition</h3>
                <p className="award-issuer">Queen's Sports Analytics Organization</p>
              </div>
              <div className="award-content-bottom">
                <p className="award-date">Mar 2024</p>
              </div>
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
          </ScrollAnimation>

          {/* BioHackathon Award*/}
          <ScrollAnimation animation="scaleIn" delay={0.25}>
            <div className={`award-card ${expandedCards.bioHackathon ? 'expanded' : ''}`}>
            <div className="award-icon">
              <Star size={24} />
            </div>
            <div className={`award-content ${titleWrapping.bioHackathon ? 'multi-line' : 'single-line'}`}>
              <div className="award-content-top">
                <h3 ref={titleRefs.bioHackathon} className="award-title">High Impact Potential Award</h3>
                <p className="award-issuer">Queen's Synapsis BioHackathon</p>
              </div>
              <div className="award-content-bottom">
                <p className="award-date">Nov 2023</p>
              </div>
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
          </ScrollAnimation>

          {/* Dean's List */}
          <ScrollAnimation animation="scaleIn" delay={0.3}>
            <div className={`award-card ${expandedCards.deansList ? 'expanded' : ''}`}>
            <div className="award-icon">
              <Star size={24} />
            </div>
            <div className={`award-content ${titleWrapping.deansList ? 'multi-line' : 'single-line'}`}>
              <div className="award-content-top">
                <h3 ref={titleRefs.deansList} className="award-title">Dean's Honours List</h3>
                <p className="award-issuer">Queen's University</p>
              </div>
              <div className="award-content-bottom">
                <p className="award-date">Fall 2024</p>
              </div>
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
          </ScrollAnimation>

          {/* RCM Level 10 Certificate */}
          <ScrollAnimation animation="scaleIn" delay={0.35}>
            <div className={`award-card ${expandedCards.rcmLevel10 ? 'expanded' : ''}`}>
            <div className="award-icon certification">
              <GraduationCap size={24} />
            </div>
            <div className={`award-content ${titleWrapping.rcmLevel10 ? 'multi-line' : 'single-line'}`}>
              <div className="award-content-top">
                <h3 ref={titleRefs.rcmLevel10} className="award-title">RCM Level 10 Certificate</h3>
                <p className="award-issuer">Royal Conservatory of Music</p>
              </div>
              <div className="award-content-bottom">
                <p className="award-date">2018</p>
              </div>
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
          </ScrollAnimation>

          {/* RCM Teaching Elementary Piano Course */}
          <ScrollAnimation animation="scaleIn" delay={0.4}>
            <div className={`award-card ${expandedCards.rcmTeaching ? 'expanded' : ''}`}>
            <div className="award-icon certification">
              <GraduationCap size={24} />
            </div>
            <div className={`award-content ${titleWrapping.rcmTeaching ? 'multi-line' : 'single-line'}`}>
              <div className="award-content-top">
                <h3 ref={titleRefs.rcmTeaching} className="award-title">RCM Teaching Elementary Piano Course</h3>
                <p className="award-issuer">Royal Conservatory of Music</p>
              </div>
              <div className="award-content-bottom">
                <p className="award-date">April 2025</p>
              </div>
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
          </ScrollAnimation>

          {/* Web Development Certifications */}
          <ScrollAnimation animation="scaleIn" delay={0.45}>
            <div className={`award-card ${expandedCards.webDevCerts ? 'expanded' : ''}`}>
            <div className="award-icon certification">
              <GraduationCap size={24} />
            </div>
            <div className={`award-content ${titleWrapping.webDevCerts ? 'multi-line' : 'single-line'}`}>
              <div className="award-content-top">
                <h3 ref={titleRefs.webDevCerts} className="award-title">Web Development Certifications</h3>
                <p className="award-issuer">TOP, fCC, Scrimba</p>
              </div>
              <div className="award-content-bottom">
                <p className="award-date">Jan 2024</p>
              </div>
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
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Awards;
