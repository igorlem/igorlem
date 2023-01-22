import React from 'react';
import { Title } from 'react-head';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { buttonStyle, sectionStyle, textStyle, titleStyle } from './styles';

const variantsParent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.5, staggerChildren: 0.15 },
  },
};

const variantsChildren = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', bounce: 0 },
  },
};

const Intro: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t('intro.title')}</Title>

      <motion.section
        css={sectionStyle}
        variants={variantsParent}
        initial="hidden"
        animate="show"
      >
        <motion.h1 css={titleStyle} variants={variantsChildren}>
          {t('intro.title')}
        </motion.h1>

        <motion.p css={textStyle} variants={variantsChildren}>
          {t('intro.lead')}
        </motion.p>

        <motion.button css={buttonStyle} variants={variantsChildren}>
          {t('intro.next-button')}
        </motion.button>
      </motion.section>
    </>
  );
};

export default Intro;
