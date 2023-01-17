import { css } from '@emotion/react';

export default css`
  :root {
    --foreground-1: #111111;
    --foreground-2: #111111cc; // 80%
    --foreground-3: #1111111a; // 10%
    --background-1: #ffffff;
    --background-2: #fafafa;

    @media (prefers-color-scheme: dark) {
      --foreground-1: #ffffff;
      --foreground-2: #ffffffcc; // 80%
      --foreground-3: #ffffff1a; // 10%
      --background-1: #111111;
      --background-2: #1f1f1f;
    }
  }

  * {
    box-sizing: border-box;
  }

  html {
    background: var(--background-1);
    color: var(--foreground-1);
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }

  p {
    color: var(--foreground-2);
    margin: 0;
  }

  button {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 0px 16px;
    height: 40px;
    background: transparent;
    border: 0;
    border-radius: 20px;
    box-shadow: inset 0 0 0 2px var(--foreground-1);
    cursor: pointer;
    // text props
    font-family: 'Helvetica Now Var';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    text-transform: uppercase;
    color: var(--foreground-1);
    transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;

    :hover {
      background-color: var(--foreground-1);
      color: var(--background-1);
    }
  }
`;
