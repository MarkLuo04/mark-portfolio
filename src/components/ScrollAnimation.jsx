import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ScrollAnimation = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  duration = 0.6,
  threshold = 0.1,
  className = '',
  ...props 
}) => {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: threshold,
    margin: "-50px 0px -50px 0px"
  });

  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 }
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 }
    },
    fadeInRight: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 }
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    bounceIn: {
      initial: { opacity: 0, scale: 0.3 },
      animate: { opacity: 1, scale: 1 }
    },
    slideInUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeInUp;

  return (
    <motion.div
      key={`${animation}-${isDarkMode ? 'dark' : 'light'}`}
      ref={ref}
      initial={selectedAnimation.initial}
      animate={isInView ? selectedAnimation.animate : selectedAnimation.initial}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
