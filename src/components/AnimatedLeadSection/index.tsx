import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { lineStyle, textSectionStyle } from './styles';

const LogotypeSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const scale1 = useTransform(scrollYProgress, [0, 0.2, 1], [0.5, 1, 1]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const filter1 = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ['blur(100px)', 'blur(0px)', 'blur(0px)']
  );

  const scale2 = useTransform(scrollYProgress, [0, 0.25, 1], [0.5, 1, 1]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.25, 1], [0, 1, 1]);
  const filter2 = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    ['blur(100px)', 'blur(0px)', 'blur(0px)']
  );

  return (
    <div ref={targetRef} css={textSectionStyle}>
      <motion.span
        css={lineStyle}
        style={{ scale: scale1, opacity: opacity1, filter: filter1 }}
      >
        I am
      </motion.span>

      <motion.span
        css={lineStyle}
        style={{ scale: scale2, opacity: opacity2, filter: filter2 }}
      >
        designer.
      </motion.span>
    </div>
  );
};

export default LogotypeSection;
