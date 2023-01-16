import React from 'react';
import { motion } from 'framer-motion';
import { stepStyle, stepActiveStyle, progressStyle } from './styles';

type Props = {
  type: 'completed' | 'active' | 'inactive';
  onComplete?: () => void;
};

const variants = {
  initial: { width: 0 },
  'animate-active': {
    width: '100%',
    transition: { duration: 2, ease: 'linear' },
  },
  'animate-inactive': { width: 0, transition: { duration: 0 } },
};

/**
 *
 */
const Step: React.FC<Props> = ({ type, onComplete }) => {
  const handleComplete = () => {
    if (type === 'active' && onComplete) {
      onComplete();
    }
  };

  return (
    <div css={[stepStyle, type === 'completed' && stepActiveStyle]}>
      <motion.div
        css={progressStyle}
        variants={variants}
        initial="initial"
        animate={type === 'active' ? 'animate-active' : 'animate-inactive'}
        onAnimationComplete={handleComplete}
      />
    </div>
  );
};

export default Step;
