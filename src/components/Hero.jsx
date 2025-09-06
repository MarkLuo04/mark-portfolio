import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
import { useTheme } from '../context/ThemeContext';
import cyberpunkImage from '../images/cyberpunk.jpg';
import cyberpunkLightImage from '../images/cyberpunk-light.png';
import '../styles/Hero.css';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const backgroundImage = isDarkMode ? cyberpunkImage : cyberpunkLightImage;
  const parallaxRef = useRef(null);
  const attributionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5; // Adjust this value to control parallax speed
        const yPos = -(scrolled * parallaxSpeed);
        parallaxRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
        
        // Make attribution follow the same parallax movement
        if (attributionRef.current) {
          attributionRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      }

      // Fade out hero content as user scrolls
      if (contentRef.current) {
        const scrolled = window.pageYOffset;
        const heroHeight = window.innerHeight;
        const fadeStart = heroHeight * 0.05; 
        const fadeEnd = heroHeight * 0.9; 
        
        if (scrolled >= fadeStart) {
          const fadeProgress = Math.min((scrolled - fadeStart) / (fadeEnd - fadeStart), 1);
          const opacity = 1 - fadeProgress;
          contentRef.current.style.opacity = opacity;
        } else {
          contentRef.current.style.opacity = 1;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Refresh animations when theme changes
  useEffect(() => {
    // Small delay to ensure DOM has updated with new theme
    const refreshAnimations = () => {
      // Reset parallax positions
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        const yPos = -(scrolled * parallaxSpeed);
        parallaxRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
      
      if (attributionRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        const yPos = -(scrolled * parallaxSpeed);
        attributionRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }

      // Reset content opacity
      if (contentRef.current) {
        const scrolled = window.pageYOffset;
        const heroHeight = window.innerHeight;
        const fadeStart = heroHeight * 0.05; 
        const fadeEnd = heroHeight * 0.9; 
        
        if (scrolled >= fadeStart) {
          const fadeProgress = Math.min((scrolled - fadeStart) / (fadeEnd - fadeStart), 1);
          const opacity = 1 - fadeProgress;
          contentRef.current.style.opacity = opacity;
        } else {
          contentRef.current.style.opacity = 1;
        }
      }
    };

    // Use requestAnimationFrame to ensure DOM updates are complete
    requestAnimationFrame(refreshAnimations);
  }, [isDarkMode]);

  return (
    <section 
      className="hero section" 
      id="home"
    >
      <div 
        ref={parallaxRef}
        className="hero-parallax-bg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div ref={contentRef} className="hero-content">
        <motion.h1 
          className="hero-name"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.0,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          Mark Luo
        </motion.h1>
        <div className="hero-tagline">
          <TypingAnimation 
            text="Software Design at Queen's University"
            typingSpeed={69}
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
            duration: 0.6,
            delay: 2.5,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <p className="scroll-text">Scroll to explore</p>
          <div className="scroll-chevron">⌄</div>
        </motion.div>
      </div>
      
              {/* Image attribution */}
        <div ref={attributionRef} className="image-attribution">
          <p className="attribution-text">Background from Cyberpunk 2077 (Day & Night)</p>
        </div>
    </section>
  );
};

export default Hero;
