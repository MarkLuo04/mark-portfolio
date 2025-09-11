import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import ExperienceCard from './ExperienceCard';
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
  const experiencesData = [
    {
      id: 'experience1',
      title: 'Data Analyst',
      company: 'Queen\'s Sports Analytics Organization',
      summary: 'Sports data analyst conducting research and analysis on basketball statistics to write articles on NBA topics.',
      dateRange: 'Sept 2024 - May 2025',
      location: 'Kingston, ON',
      description: 'As a sports data analyst for the QSAO Basketball team, I conducted research and analysis on NBA topics. I worked with raw sports data to extract, analyze and interpret meaningful insights. This included data cleaning, structuring and analysis collected from reputable sources such as NBA.com, ESPN Analytics, and Basketball Reference to generate insights and write articles on various NBA news and trends. I also participated in meetings and discussions with other members of the basketball analyst team to brainstorm and communicate ideas.',
      images: [
    {
      src: recapArticleImage,
      alt: "NBA Trade Deadline Recap Article",
      description: "Article written: A recap of the biggest trades"
    },
    {
      src: awardArticleImage,
      alt: "NBA Awards Prediction Article",
      description: "Article written: Mid-season NBA Awards prediction"
        }
      ],
      animation: 'fadeInLeft',
      delay: 0.3
    },
    {
      id: 'experience2',
      title: 'Case Competition and Hackathon',
      company: 'Queen\'s Sports Analytics Organization',
      summary: 'Won 1st place in case competition by acting as analytics consultants for the Memphis Grizzlies through data-driven strategies.',
      dateRange: 'March 2025',
      location: 'Kingston, ON',
      description: 'Our role was to act as analytics consultants for a given NBA team and craft a data-driven strategy to secure future success. This included analyzing the team, building a player valuation framework, proposing free agent acquisitions, all while staying within the NBA\'s projected salary cap. Using player data provided in .xlsx format and visualizing our graphs in R, we created a compelling case for securing the future of the Memphis Grizzlies.',
      images: [
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
      ],
      animation: 'fadeInRight',
      delay: 0.4
    },
    {
      id: 'experience3',
      title: 'Synapsis BioHackathon 2025',
      company: 'Queen\'s Synapsis BioTech',
      summary: 'Won high impact award in the Synapsis BioHackathon 2025 for our project in optimizing clinical trial recruitment.',
      dateRange: 'March 2025',
      location: 'Kingston, ON',
      description: 'Awarded the High Impact Potential Award at the Synapsis BioHackathon 2025 for developing an innovative solution to optimize clinical trial recruitment. We designed and pitched a centralized, AI-powered platform that functions like LinkedIn, but for clinical trials. This solution improves patient recruitment by securely matching individuals with studies using their encrypted health data. To further encourage participation, we incorporated a gamified reward system, all while prioritizing ethical data privacy and regulatory compliance.',
      images: [
    {
      src: biohackathonPresentationImage,
      alt: "BioHackathon Presentation",
      description: "Presenting our AI-powered platform solution"
    },
    {
      src: biohackathonAwardImage,
      alt: "BioHackathon Award",
      description: "High Impact Potential Award certificate"
        }
      ],
      animation: 'fadeInLeft',
      delay: 0.5
    },
    {
      id: 'experience4',
      title: 'Piano Teacher',
      company: 'Arden\'s Music',
      summary: 'Instructing students in practical piano lessons and music theory, helping them develop both technical skills and musicality on the piano.',
      dateRange: 'August 2023 - Present',
      location: 'Kingston, ON',
      description: 'I teach students of all ages and skill levels, evaluating their progress and needs and preparing lessons that will help them achieve their goals. I prepare them for recitals and performances at Arden\'s music events, and I have also guided students through RCM levels, theory, and exam preparation. Above all, I encourage each student to explore the music they enjoy and nurture their love for playing the piano.',
      images: [
    {
      src: ardensImage,
      alt: "Arden's Music Teaching Room",
      description: "Teaching section of Arden's Music"
    },
    {
      src: ardensStudioImage,
      alt: "Teaching Studio Room",
      description: "My Teaching Studio!"
        }
      ],
      animation: 'fadeInRight',
      delay: 0.6
    }
  ];

  return (
    <section className="experience section" id="experience">
      <div className="section-container">
        <ScrollAnimation animation="fadeInUp" delay={0.1}>
          <h2 className="section-header">My Experiences</h2>
        </ScrollAnimation>
        
        <div className="experience-timeline">
          {/* Timeline Line */}
          <ScrollAnimation animation="slideInUp" delay={0.2} duration={0.6}>
            <div className="timeline-line"></div>
          </ScrollAnimation>
          
          {experiencesData.map((experience) => (
            <ScrollAnimation key={experience.id} animation={experience.animation} delay={experience.delay}>
              <ExperienceCard
                id={experience.id}
                title={experience.title}
                company={experience.company}
                summary={experience.summary}
                dateRange={experience.dateRange}
                location={experience.location}
                description={experience.description}
                images={experience.images}
              />
          </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
