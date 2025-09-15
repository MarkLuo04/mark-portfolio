import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Custom hook for automatic section detection using Intersection Observer
 * Automatically detects which section is currently in view without hardcoding
 */
export const useSectionDetection = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [sectionVisibility, setSectionVisibility] = useState({});

  // Find all sections with IDs on the page
  const findSections = useCallback(() => {
    const sections = Array.from(document.querySelectorAll('[id]'))
      .filter(element => {
        // Filter for likely section elements
        const tagName = element.tagName.toLowerCase();
        const hasSectionClass = element.classList.contains('section');
        const isMainContent = ['section', 'main', 'article', 'header', 'footer'].includes(tagName);
        
        return (isMainContent || hasSectionClass) && element.id;
      });

    return sections.reduce((acc, section) => {
      acc[section.id] = section;
      return acc;
    }, {});
  }, []);

  // Set up intersection observer for all sections
  useEffect(() => {
    const sections = findSections();
    console.log('Sections found:', Object.keys(sections));

    if (Object.keys(sections).length === 0) {
      setActiveSection('home');
      return;
    }

    const observers = [];
    const visibilityMap = {};

    // Create observers for each section
    Object.entries(sections).forEach(([id, element]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibilityMap[entry.target.id] = entry.intersectionRatio;
            
            // Find the section with the highest intersection ratio
            const mostVisibleSection = Object.keys(visibilityMap).reduce((a, b) => 
              visibilityMap[a] > visibilityMap[b] ? a : b
            );
            
            // Only update if we have a meaningful intersection
            if (visibilityMap[mostVisibleSection] > 0.1) {
              setActiveSection(mostVisibleSection);
              console.log('Most visible section:', mostVisibleSection, 'ratio:', visibilityMap[mostVisibleSection]);
            }
          });
        },
        {
          rootMargin: '0px 0px -50% 0px', // Trigger when section is 50% visible
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    // Add scroll listener for footer detection (fallback)
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If we're near the bottom of the page, set footer as active
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection('footer');
        console.log('Footer detected via scroll position');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observers.forEach(observer => observer.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, [findSections]);

  return activeSection;
};

export default useSectionDetection;
