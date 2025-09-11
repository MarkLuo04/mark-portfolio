import React, { useState, useRef, useEffect } from 'react';
import { Star, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

const AwardCard = ({ 
  id,
  title, 
  issuer, 
  date, 
  description, 
  isCertification = false,
  expandedContent,
  animation = "scaleIn", 
  delay = 0 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTitleWrapping, setIsTitleWrapping] = useState(false);
  const titleRef = useRef(null);

  // Function to detect if a title wraps
  const checkTitleWrapping = () => {
    if (titleRef.current) {
      const titleElement = titleRef.current;
      const wrapping = titleElement.scrollHeight > titleElement.clientHeight;
      setIsTitleWrapping(wrapping);
    }
  };

  // Check wrapping on mount and when expanded state changes
  useEffect(() => {
    checkTitleWrapping();
  }, [isExpanded]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const IconComponent = isCertification ? GraduationCap : Star;

  return (
    <div className={`award-card ${isExpanded ? 'expanded' : ''}`}>
      <div className={`award-icon ${isCertification ? 'certification' : ''}`}>
        <IconComponent size={24} />
      </div>
      <div className={`award-content ${isTitleWrapping ? 'multi-line' : 'single-line'}`}>
        <div className="award-content-top">
          <h3 ref={titleRef} className="award-title">{title}</h3>
          <p className="award-issuer">{issuer}</p>
        </div>
        <div className="award-content-bottom">
          <p className="award-date">{date}</p>
        </div>
        {isExpanded && (
          <div className="award-expanded">
            {description && (
              <p className="award-description">{description}</p>
            )}
            {expandedContent}
          </div>
        )}
      </div>
      <button 
        className="expand-button"
        onClick={toggleExpanded}
      >
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
    </div>
  );
};

export default AwardCard;
