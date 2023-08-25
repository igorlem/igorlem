import { motion, useMotionValue } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { cursorStyle } from './styles';

const Cursor: React.FC = () => {
  const [cursorXY, setCursorXY] = useState({ x: -1000, y: -1000 });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: { clientX: number; clientY: number }) => {
      const y = e.clientY - 128;
      setCursorXY({ x, y });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <motion.div
      css={cursorStyle}
      style={{
        translateX: xSpring,
        translateY: ySpring,
      }}
    />
  );
};

export default Cursor;
