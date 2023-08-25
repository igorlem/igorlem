import Logotype from 'assets/logotype.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { headerStyle, logoWrapperStyle } from './styles';

type Props = {
  lines: string[];
};

const springConfig = {};

const HeaderSection: React.FC<Props> = ({ lines }) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const logotypeScale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const logotypeBlur = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    ['blur(0px)', 'blur(200px)']
  );
  const logotypeOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);

  return (
    <div ref={targetRef} css={headerStyle} id="header">
      <motion.div
        css={logoWrapperStyle}
        style={{
          scale: logotypeScale,
          filter: logotypeBlur,
          opacity: logotypeOpacity,
        }}
      >
        <Logotype />
      </motion.div>

      {lines.map((item, i) => (
        <span key={`line-${i}`}>{item}</span>
      ))}
    </div>
  );
};

export default HeaderSection;
