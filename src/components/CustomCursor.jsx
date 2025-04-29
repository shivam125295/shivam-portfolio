import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        className="cursor-dot hidden md:block fixed w-3 h-3 bg-primary dark:bg-primary-light rounded-full pointer-events-none z-[9999] transition-transform duration-300 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isHovering ? 'scale(0)' : 'scale(1)',
        }}
      />
      <div 
        className="cursor-ring hidden md:block fixed w-8 h-8 rounded-full border-2 border-primary dark:border-primary-light pointer-events-none z-[9998] transition-all duration-300 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`,
        }}
      />
    </>
  );
};

export default CustomCursor;
