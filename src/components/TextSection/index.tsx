import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { lineStyle, textSectionStyle } from './styles';

type Props = {
  lines: string[];
};

const LogotypeSection: React.FC<Props> = ({ lines }) => {
  const blockLogoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: blockLogoRef,
    offset: ['start end', 'end start'],
  });

  const logoScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  const logoBlur = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ['blur(100px)', 'blur(0px)', 'blur(0px)', 'blur(100px)']
  );

  const logoOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.section
      ref={blockLogoRef}
      style={{
        scale: logoScale,
        filter: logoBlur,
        opacity: logoOpacity,
      }}
      css={textSectionStyle}
    >
      {lines.map((line, i) => (
        <span key={`line-${i}`} css={lineStyle}>
          {line}
        </span>
      ))}
    </motion.section>
  );
};

export default LogotypeSection;
