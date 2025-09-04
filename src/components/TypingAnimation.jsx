import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ 
  text, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000,
  loop = true,
  className = "",
  cursor = true,
  cursorChar = "|"
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          if (loop) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText(text.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, text, typingSpeed, deletingSpeed, pauseTime, loop]);

  useEffect(() => {
    if (!cursor) return;
    
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, [cursor]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <span className={`typing-cursor ${showCursor ? 'visible' : 'hidden'}`}>
          {cursorChar}
        </span>
      )}
    </span>
  );
};

export default TypingAnimation;
