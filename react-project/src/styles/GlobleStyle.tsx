import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
body {
  background-color : var(--black);
  button,
  a {cursor: pointer};
  color: var(--white);
  }
  body,
  body::before,
  body::after,
  body *,
  body *::before,
  body *::after {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  video {
    width: 100%;
    height: auto;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  a,
  button {
    cursor: pointer;
  }

  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }
  
  :root { 
    --primary: #1d5bd6;
    --secondary: #6d35de;
    --tertiary: #d9d9d9;
    --accent: #276ef1;
    --negative: #e11900;
    --warning: #ffe600;
    --positive: #048848;
    --white: #ffffff;
    --black: #000000;
    --gray-100: #f6f6f6;
    --gray-200: #efefef;
    --gray-300: #e6e6e6;
    --gray-400: #dedede;
    --gray-500: #d6d6d6;
    --gray-600: #ababab;
    --gray-700: #808080;
    --gray-800: #565656;
    --gray-900: #2b2b2b;
    --blue-100: #d2def7;
    --blue-200: #a5bdef;
    --blue-300: #789de7;
    --blue-400: #4a7cde;
    --blue-500: #1d5bd6;
    --blue-600: #1749ab;
    --blue-700: #123781;
    --blue-800: #0c2456;
    --blue-900: #06122b;
    --purple-100: #e2d7f8;
    --purple-200: #c5aef2;
    --purple-300: #a886eb;
    --purple-400: #8b5ee4;
    --purple-500: #6d35de;
    --purple-600: #582bb1;
    --purple-700: #422085;
    --purple-800: #2c1559;
    --purple-900: #160b2c;
    --yellow-100: #fffacc;
    --yellow-200: #fff599;
    --yellow-300: #fff066;
    --yellow-400: #ffeb33;
    --yellow-500: #ffe600;
    --yellow-600: #ccb800;
    --yellow-700: #998a00;
    --yellow-800: #665c00;
    --yellow-900: #332e00;
    --red-100: #f9d1cc;
    --red-200: #f3a399;
    --red-300: #ed7566;
    --red-400: #e74733;
    --red-500: #e11900;
    --red-600: #b41400;
    --red-700: #870f00;
    --red-800: #5a0a00;
    --red-900: #2d0500;
    --colar-100: #ffe5cc;
    --colar-200: #ffcc99;
    --colar-300: #ffb266;
    --colar-400: #ff9933;
    --colar-500: #ff7f00;
    --colar-600: #cc6600;
    --colar-700: #95450D;
    --colar-800: #663300;
    --colar-900: #331900;
    --orange-100: #fdefd8;
    --orange-200: #fce0b1;
    --orange-300: #fad08a;
    --orange-400: #f9c163;
    --orange-500: #f7b13c;
    --orange-600: #c68e30;
    --orange-700: #946a24;
    --orange-800: #634718;
    --orange-900: #31230c;
  } 
`;

export default GlobalStyle;
