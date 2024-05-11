import { useState, useEffect } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className={styles.cursor} style={{ left: `calc(${position.x}px - 10px)`, top: `calc(${position.y}px - 10px)` }}></div>
      <div className={styles['cursor-dot']} style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
    </div>
  );
};

export default CustomCursor;
