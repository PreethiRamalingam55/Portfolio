import { useState, useEffect } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.cursor} style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
  );
};

export default CustomCursor;
