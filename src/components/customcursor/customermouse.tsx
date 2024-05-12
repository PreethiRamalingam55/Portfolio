import React, { useState, useEffect } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setClicked(true);
    };

    const handleMouseUp = () => {
      setClicked(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleLinkHover = () => {
    setHovered(true);
  };

  const handleLinkLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    const links = document.querySelectorAll('a,button');

    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
      link.addEventListener('click', handleButtonClick); // Adding click event listener to reset hover state
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
        link.removeEventListener('click', handleButtonClick);
      });
    };
  }, []);

  const handleButtonClick = () => {
    setHovered(false); // Reset hovered state when button is clicked
  };

  return (
    <div>
      <div className={`${styles.cursor} ${hovered ? styles.hovered : ''} ${clicked ? styles.expanded : ''}`} style={{ left: `calc(${position.x}px - 10px)`, top: `calc(${position.y}px - 10px)`, pointerEvents: 'none' }}></div>
      <div className={`${styles['cursor-dot']} ${hovered ? styles.hovered : ''} ${clicked ? styles.expanded : ''}`} style={{ left: `${position.x}px`, top: `${position.y}px`, pointerEvents: 'none' }}></div>
    </div>
  );
};

export default CustomCursor;
