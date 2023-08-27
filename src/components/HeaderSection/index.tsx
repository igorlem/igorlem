import Logotype from 'assets/logotype.svg';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { headerStyle } from './styles';

const HeaderSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'center start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const scaleAnimated = useSpring(scale, { damping: 10 });
  const logotypeBlur = useTransform(
    scrollYProgress,
    [0.3, 1],
    ['blur(0px)', 'blur(100px)']
  );
  const logotypeOpacity = useTransform(scrollYProgress, [0.2, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      css={headerStyle}
      style={{
        scale: scaleAnimated,
        opacity: logotypeOpacity,
        filter: logotypeBlur,
      }}
    >
      <Logotype />
    </motion.div>
  );
};

export default HeaderSection;
