import { css } from '@emotion/react';

export const sectionStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 16px;
`;

export const titleStyle = css`
  font-family: 'Univers Next Pro';
  font-weight: 400;
  font-size: 160px;
  line-height: 100%;
  letter-spacing: -0.06em;
  margin: 0 5vw;
  text-transform: lowercase;
`;

export const textStyle = css`
  max-width: 568px;
  font-family: 'Helvetica Now Var';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  margin: 0 5vw;
  font-feature-settings: 'cv11' on;
`;

export const buttonStyle = css`
  position: absolute;
  bottom: 48px;
`;
