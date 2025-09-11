import React from 'react';
import { Github } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import AwardCard from './AwardCard';
import '../styles/Awards.css';

const Awards = () => {
  const awardsData = [
    {
      id: 'qsaoCaseComp',
      title: '1st Place at QSAO Case Competition',
      issuer: 'Queen\'s Sports Analytics Organization',
      date: 'Mar 2024',
      description: 'Won 1st place in case competition by acting as analytics consultants for the Memphis Grizzlies through data-driven strategies.',
      isCertification: false,
      animation: 'scaleIn',
      delay: 0.2
    },
    {
      id: 'bioHackathon',
      title: 'High Impact Potential Award',
      issuer: 'Queen\'s Synapsis BioHackathon',
      date: 'Nov 2023',
      description: 'Won high impact award in the Synapsis BioHackathon 2025 for our project in optimizing clinical trial recruitment.',
      isCertification: false,
      animation: 'scaleIn',
      delay: 0.25
    },
    {
      id: 'deansList',
      title: 'Dean\'s Honours List',
      issuer: 'Queen\'s University',
      date: 'Fall 2024',
      description: 'Placed on the Dean\'s Honour List with a 3.94 cumulative GPA',
      isCertification: false,
      animation: 'scaleIn',
      delay: 0.3
    },
    {
      id: 'rcmLevel10',
      title: 'RCM Level 10 Certificate',
      issuer: 'Royal Conservatory of Music',
      date: '2018',
      description: 'Completed Royal Conservatory of Music Level 10 Certificate which encompasses practical, theory and history exams.',
      isCertification: true,
      animation: 'scaleIn',
      delay: 0.35
    },
    {
      id: 'rcmTeaching',
      title: 'RCM Teaching Elementary Piano Course',
      issuer: 'Royal Conservatory of Music',
      date: 'April 2025',
      description: 'Completed guided online course that provided pedagogical instruction on teaching elementary-level piano students through the Royal Conservatory of Music curriculum.',
      isCertification: true,
      animation: 'scaleIn',
      delay: 0.4
    },
    {
      id: 'webDevCerts',
      title: 'Web Development Certifications',
      issuer: 'TOP, fCC, Scrimba',
      date: 'Jan 2024',
      description: null,
      isCertification: true,
      animation: 'scaleIn',
      delay: 0.45,
      expandedContent: (
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
      )
    }
  ];

  return (
    <section className="awards section" id="awards">
      <div className="section-container">
        <ScrollAnimation animation="fadeInUp" delay={0.1}>
          <h2 className="section-header">Awards & Certifications</h2>
        </ScrollAnimation>
        
        <div className="awards-grid">
          {awardsData.map((award) => (
            <ScrollAnimation key={award.id} animation={award.animation} delay={award.delay}>
              <AwardCard
                id={award.id}
                title={award.title}
                issuer={award.issuer}
                date={award.date}
                description={award.description}
                isCertification={award.isCertification}
                expandedContent={award.expandedContent}
              />
          </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
