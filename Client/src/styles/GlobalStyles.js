// /src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Import Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&family=Montserrat:wght@400;500;600;700&display=swap');

  /* CSS Reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #ffffff;
    color: #041e3a; /* Dominant navy blue color from the site */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }
`;

export default GlobalStyles;
