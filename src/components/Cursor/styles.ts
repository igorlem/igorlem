import { css } from '@emotion/react';

export const cursorStyle = css`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 256px;
  height: 256px;
  filter: blur(64px);
  border-radius: 50%;
  background-color: var(--accent);
`;
