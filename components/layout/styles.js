import css from 'styled-jsx/css';

export const global = css.global`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  }

  body {
    font: 300 100%/1.5 'Roboto', sans-serif;
    color: #aaa;
  }

  a {
    text-decoration: none;
  }
`;

export default css`
  .container {
    display: grid;
    grid-template-columns: 160px auto;
    height: 100vh;
  }
`;
