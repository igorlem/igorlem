import { css } from '@emotion/react';
import fontBold from 'assets/fonts/bold.woff2';

export default css`
  @font-face {
    font-family: irrlmm;
    font-style: normal;
    font-weight: 700;
    src: url(${fontBold}) format('woff2');
    font-feature-settings: 'ss04' on, 'ss03' on, 'ss01' on, 'ss07' on, 'ss02' on;
  }

  :root {
    --fg: rgba(0, 0, 0, 1);
    --bg: #f0f0f0;
    --accent: #ff385c;

    @media (prefers-color-scheme: dark) {
      --fg: rgba(255, 255, 255, 1);
      --bg: #0f0f0f;
    }
  }

  body {
    font-size: 88px;
    line-height: 1.2;
    font-weight: 700;
    font-family: irrlmm, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    background: var(--bg);
    color: var(--fg);
    -webkit-font-smoothing: antialiased;
  }

  svg {
    fill: var(--fg);
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }
`;
