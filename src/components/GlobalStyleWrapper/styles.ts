import { css } from '@emotion/react';
import fontReg from 'assets/fonts/reg.woff2';
import fontBold from 'assets/fonts/bold.woff2';

export default css`
  @font-face {
    font-family: 'Uni';
    font-style: normal;
    font-weight: 700;
    src: url(${fontBold}) format('woff2');
  }

  @font-face {
    font-family: 'Uni';
    font-style: normal;
    font-weight: normal;
    src: url(${fontReg}) format('woff2');
  }

  :root {
    --foreground-1: rgba(0, 0, 0, 0.9);
    --foreground-2: rgba(0, 0, 0, 0.6);
    --background: #f8f8f8;

    @media (prefers-color-scheme: dark) {
      --foreground-1: rgba(255, 255, 255, 0.9);
      --foreground-2: rgba(255, 255, 255, 0.6);
      --background: #191919;
    }
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  html {
    background: var(--background);
    color: var(--foreground-1);
    font-family: 'Uni', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;
