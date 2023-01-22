import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Step from './components/StepIndicator';
import {
  storiesStyle,
  hoverStyle,
  progressBarStyle,
  imageStyle,
  captionStyle,
} from './styles';

type Props = {
  stories: {
    n: number;
    image: string;
    label: string;
  }[];
};

const fadeVariants = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5, ease: 'linear' },
  },
};

const moveVariants = {
  hide: { x: '0%' },
  show: {
    x: '-100%',
    transition: { delay: 0.5, duration: 20, ease: 'linear' },
  },
};

/**
 * # Stories Player
 *
 * Component that almost exactly replicates the logic of Stories
 * used in various social networks and apps.
 *
 * Pass an array of stories to make it all magically work.
 */
const StoriesPlayer: React.FC<Props> = ({ stories }) => {
  const [currentStoryN, setCurrentStoryN] = useState(1);

  const currentStory = stories.find((story) => story.n === currentStoryN);

  const handleStepComplete = () => {
    if (currentStoryN < stories.length) {
      setCurrentStoryN(currentStoryN + 1);
    } else {
      setCurrentStoryN(1);
    }
  };

  return (
    <div css={storiesStyle}>
      <motion.div css={hoverStyle} />

      <div css={progressBarStyle}>
        {stories.map((story) => (
          <Step
            key={story.n}
            type={
              story.n === currentStoryN
                ? 'active'
                : story.n < currentStoryN
                ? 'completed'
                : 'inactive'
            }
            onComplete={handleStepComplete}
          />
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          key={currentStoryN}
          variants={fadeVariants}
          initial="hide"
          animate="show"
          exit="hide"
        >
          <motion.img
            src={currentStory?.image}
            css={imageStyle}
            variants={moveVariants}
            transition={{ duration: 20, ease: 'linear' }}
            initial="hide"
            animate="show"
          />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.span
          key={currentStoryN}
          css={captionStyle}
          variants={fadeVariants}
          transition={{ duration: 0.2 }}
          initial="hide"
          animate="show"
          exit="hide"
        >
          {currentStory?.label}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default StoriesPlayer;
