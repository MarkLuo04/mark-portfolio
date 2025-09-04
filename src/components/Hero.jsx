import React from 'react';
import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
import { useTheme } from '../context/ThemeContext';
import cyberpunkImage from '../images/cyberpunk.jpg';
import cyberpunkLightImage from '../images/cyberpunk-light.png';
import '../styles/Hero.css';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const backgroundImage = isDarkMode ? cyberpunkImage : cyberpunkLightImage;

  return (
    <section 
      className="hero section" 
      id="home"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-content">
        <motion.h1 
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.5,
            ease: "easeOut"
          }}
        >
          Mark Luo
        </motion.h1>
        <div className="hero-tagline">
          <TypingAnimation 
            text="Full-Stack Developer"
            typingSpeed={150}
            deletingSpeed={100}
            pauseTime={2000}
            className="typing-text"
            cursorChar="|"
            loop={false}
            delay={1500}
          />
        </div>
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.8,
            delay: 5.5,
            ease: "easeOut"
          }}
        >
          <p className="scroll-text">Scroll to explore</p>
          <div className="scroll-chevron">⌄</div>
        </motion.div>
      </div>
      
      {/* Image attribution */}
      <div className="image-attribution">
        <p className="attribution-text">Background from Cyberpunk 2077 (Day & Night)</p>
      </div>
    </section>
  );
};

export default Hero;
