import { css } from '@emotion/react';

export const sectionStyle = css`
  display: flex;
  width: 100%;
  height: 90vh;
  margin: 5vh 0;
  padding: 0 7.5vw;
`;

export const leftColumnStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 64px;
`;

export const rightColumnStyle = css`
  flex: 1;
`;

export const textWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 440px;
  margin-right: 24px;
`;

export const titleStyle = css`
  font-family: 'Helvetica Now Var';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  margin: 0;
`;

export const positionStyle = css`
  font-family: 'Univers Next Pro';
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: -0.02em;
  margin: 0;
`;

export const workDescriptionStyle = css`
  display: flex;
  flex-direction: column;
  font-family: 'Helvetica Now Var';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: 'cv11' on;
  margin: 0;

  > *:not(:last-child) {
    margin-bottom: 24px;
  }
`;
