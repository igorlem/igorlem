import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { blockStyle, wrapperStyle } from './styles';

type Props = {
  blocks: string[][];
};

const animationVariants = {
  inactive: {
    translateY: 40,
    scale: 0.8,
    opacity: 0,
    transition: { delay: 0 },
  },
  active: { translateY: 0, scale: 1, opacity: 1 },
};

const LogotypeSection: React.FC<Props> = ({ blocks }) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);
  const filter = useTransform(
    scrollYProgress,
    [0.95, 1],
    ['blur(0px)', 'blur(100px)']
  );
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [128, 0, 0, -128]
  );
  const translateYSpring = useSpring(translateY, {
    damping: 20,
    stiffness: 50,
  });

  return (
    <motion.div
      ref={targetRef}
      css={wrapperStyle}
      style={{ opacity, translateY: translateYSpring, filter }}
    >
      {blocks.map((lines, blockIndex) => (
        <div key={`block-${blockIndex}`} css={blockStyle}>
          {lines.map((line, lineIndex) => (
            <span key={`line-${lineIndex}`}>{line}</span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default LogotypeSection;
